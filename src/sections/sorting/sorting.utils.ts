import type {TMember, TOrder, TSortBy} from '@/types'
import type {TGroup} from '@/types/group'
import {getTimeDiff, parseMinuteFromTime} from '@/utils'
import {generateID} from '@/utils/uuid'
import _ from 'lodash'
import type {RowTableDataPT} from './sorting.type'

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
		const timeFromCreation1 = getTimeDiff(curTimeStamp, member1.createAt)
		const timeFromCreation2 = getTimeDiff(curTimeStamp, member2.createAt)
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

export const getCntPerTimeChunk = (
	cnt: number,
	time: number,
	unitTime: number,
) => {
	const timeChunk = Math.floor(time / unitTime)
	return cnt / timeChunk
}
export const raisePlayingCnt = (members: TMember[], ids: string[]) => {
	const result = members.map((member) => {
		if (_.includes(ids, member.id)) {
			member.cntPlay += 1
		}
		return member
	})
	return result
}
export const createNewGroup = (memberIds: string[]): TGroup => ({
	id: generateID(),
	memberIds,
})

export const createTableData = (
	member: TMember,
): Omit<RowTableDataPT, 'isSelected' | 'onSelect'> => {
	const id = member.id
	const name = member.name
	const term = getTermFromCreatedToNow(member.createAt, Date.now())
	const cnt = member.cntPlay
	const cntPerTime = '1'
	const tableData = {
		id,
		name,
		term,
		cnt,
		cntPerTime,
	}
	return tableData
}

const getTermFromCreatedToNow = (createdAt: number, now: number) => {
	const timeDiffFromCreatedToNow = getTimeDiff(createdAt, now) // 등록시간 ~ 현재
	const minuteDiff = parseMinuteFromTime(timeDiffFromCreatedToNow)
	if (minuteDiff < 1) return '1분 미만'
	return `~ ${minuteDiff} 분`
}
