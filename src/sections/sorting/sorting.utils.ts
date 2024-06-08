import type {TMember, TOrder, TSortBy} from '@/types'

export const sortMembers = (
	members: TMember[],
	sortBy: TSortBy,
	order: TOrder,
	timeChunk: number = 1000 * 5,
): TMember[] => {
	if (sortBy === 'cntPerTime')
		return sortMembersByCntPerTimeChunk(members, order, timeChunk)
	if (sortBy === 'cntPlay') return sortMembersByCntPlay(members, order)
	if (sortBy === 'createAt') return sortMembersByCreatedAt(members, order)
	if (sortBy === 'name') return sortMembersByName(members, order)
	return members
}

export const sortMembersByCntPerTimeChunk = (
	members: TMember[],
	order: TOrder,
	timeChunk: number,
): TMember[] => {
	const curTimeStamp = Date.now()
	members.sort((member1, member2) => {
		const timeFromCreation1 = getDuration(curTimeStamp, member1.createAt)
		const timeFromCreation2 = getDuration(curTimeStamp, member2.createAt)
		const cntPerTime1 = getCntPerTimeChunk(
			member1.cntPlay,
			timeFromCreation1,
			timeChunk,
		)
		const cntPerTime2 = getCntPerTimeChunk(
			member2.cntPlay,
			timeFromCreation2,
			timeChunk,
		)
		const result = cntPerTime1 - cntPerTime2
		return switchNegativeIfNot(order === 'asc', result)
	})
	return members
}

export const sortMembersByCntPlay = (
	members: TMember[],
	order: TOrder,
): TMember[] =>
	members.sort((member1, member2) => {
		const result = member1.cntPlay - member2.cntPlay
		return switchNegativeIfNot(order === 'asc', result)
	})

export const sortMembersByName = (
	members: TMember[],
	order: TOrder,
): TMember[] =>
	members.sort((member1, member2) => {
		const result = member1.name.localeCompare(member2.name)
		return switchNegativeIfNot(order === 'asc', result)
	})

export const sortMembersByCreatedAt = (
	members: TMember[],
	order: TOrder,
): TMember[] =>
	members.sort((member1, member2) => {
		const result = member1.createAt - member2.createAt
		return switchNegativeIfNot(order === 'asc', result)
	})

const switchNegativeIfNot = (when: boolean, num: number): number =>
	when ? num : -num

const getDuration = (timeStamp1: number, timeStamp2: number) =>
	Math.abs(timeStamp1 - timeStamp2)

const getCntPerTimeChunk = (cnt: number, time: number, unitTime: number) => {
	const timeChunk = Math.floor(time / unitTime)
	return cnt / timeChunk
}
