import type {TMember, TOrder, TSortBy} from '@/types'
import {getTimeDiff, getTimeStamp, parseMinuteFromTime} from '@/utils'
import {shallowArrayCopy} from '@/utils/array-manager'
import _ from 'lodash'
import {DEFAULT_TIME_CHUNK} from './sorting.constant'
import type {RowTableDataPT} from './sorting.type'

export const sortMembers = (
	members: TMember[],
	sortBy: TSortBy,
	order: TOrder,
	timeChunk: number = DEFAULT_TIME_CHUNK,
): TMember[] => {
	if (sortBy === 'cntPerTime')
		return sortMembersByCntPerTimeChunk(members, order, timeChunk)
	if (sortBy === 'cntPlay') return sortMembersByCntPlay(members, order)
	if (sortBy === 'createAt') return sortMembersByCreatedAt(members, order)
	if (sortBy === 'name') return sortMembersByName(members, order)
	return members
}
/** "단위 시간 당 참여횟수" 을 기준으로 멤버 정렬 */
const sortMembersByCntPerTimeChunk = (
	members: TMember[],
	order: TOrder,
	timeChunk: number,
): TMember[] => {
	const _members = shallowArrayCopy(members)
	const current = getTimeStamp()
	_members.sort((member1, member2) => {
		const cntPlayPerTimeChunk1 = getCntPlayPerTimeChunk(
			member1.cntPlay,
			member1.createAt,
			current,
			timeChunk,
		)
		const cntPlayPerTimeChunk2 = getCntPlayPerTimeChunk(
			member2.cntPlay,
			member2.createAt,
			current,
			timeChunk,
		)
		const diff = cntPlayPerTimeChunk1 - cntPlayPerTimeChunk2
		return switchNegativeIfNot(order === 'asc', diff)
	})
	return _members
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
		if (_.includes(ids, member.id)) member.cntPlay += 1
		return member
	})
	return result
}

export const createTableData = (
	member: TMember,
): Omit<RowTableDataPT, 'isSelected' | 'onSelect'> => {
	const now = Date.now()

	const id = member.id
	const name = member.name
	const cnt = `${member.cntPlay} 회`
	const term = getPrintedTermFromCreatedToNow(member.createAt, now)
	const cntPerTime = getPrintedCntPer5Min(member.cntPlay, member.createAt, now)
	const tableData = {
		id,
		name,
		term,
		cnt,
		cntPerTime,
	}
	return tableData
}

const getPrintedTermFromCreatedToNow = (createdAt: number, now: number) => {
	const timeDiffFromCreatedToNow = getTimeDiff(createdAt, now) // 등록시간 ~ 현재
	const minuteDiff = parseMinuteFromTime(timeDiffFromCreatedToNow)
	if (minuteDiff < 1) return '1 분 미만'
	return `~ ${minuteDiff} 분`
}

const getPrintedCntPer5Min = (cnt: number, createdAt: number, now: number) => {
	const timeDiffFromCreatedToNow = getTimeDiff(createdAt, now)
	if (cnt === 0) return '0 회'
	if (timeDiffFromCreatedToNow < 50000) return `${cnt.toFixed(1)} 회`
	const cntPer5Min = getCntPerTimeChunk(
		cnt,
		timeDiffFromCreatedToNow,
		DEFAULT_TIME_CHUNK,
	)
	return `${cntPer5Min.toFixed(1)} 회`
}
/** "시간 단위 당 참여횟수" 반환 */
export const getCntPlayPerTimeChunk = (
	cntPlay: number,
	startTime: number,
	endTime: number,
	timeChunk: number,
): number => {
	const timeDiff = getTimeDiff(startTime, endTime)
	const divisor = timeDiff < timeChunk ? timeChunk : timeDiff / timeChunk
	return cntPlay / divisor
}
