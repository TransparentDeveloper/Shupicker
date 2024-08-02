import type {TMember, TOrder, TSortBy} from '@/types'
import {getTimeDiff, getTimeDiffInMinute, getTimeStamp} from '@/utils'
import {shallowArrayCopy} from '@/utils/array-manager'
import _, {floor, isInteger, round} from 'lodash'
import {DEFAULT_TIME_CHUNK} from './sorting.constant'

/** 멤버 배열 정렬 */
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
/** "시간 당 평균 참여횟수" 을 기준으로 멤버 배열 정렬 */
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
/** "참여 횟수" 를 기준으로 멤버 배열 정렬 */
const sortMembersByCntPlay = (members: TMember[], order: TOrder): TMember[] =>
	members.sort((member1, member2) => {
		const result = member1.cntPlay - member2.cntPlay
		return switchNegativeIfNot(order === 'asc', result)
	})
/** "이름" 을 기준으로 멤버 배열 정렬 */
const sortMembersByName = (members: TMember[], order: TOrder): TMember[] =>
	members.sort((member1, member2) => {
		const result = member1.name.localeCompare(member2.name)
		return switchNegativeIfNot(order === 'asc', result)
	})
/** "등록 시간" 을 기준으로 멤버 배열 정렬 */
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

export const raisePlayingCnt = (members: TMember[], ids: string[]) => {
	const result = members.map((member) => {
		if (_.includes(ids, member.id)) member.cntPlay += 1
		return member
	})
	return result
}
/** "시간 당 평균 참여횟수" 반환 */
export const getCntPlayPerTimeChunk = (
	cntPlay: number,
	startTime: number,
	endTime: number,
	timeChunk: number,
): number => {
	const timeDiff = getTimeDiff(startTime, endTime)
	const divisor = timeDiff < timeChunk ? 1 : timeDiff / timeChunk
	return cntPlay / divisor
}
/** "시간 당 평균 참여횟수", 출력 형태로 반환 */
export const getFormattedCntPlayPerTimeChunk = (
	cntPlay: number,
	startTime: number,
	endTime: number,
	timeChunk: number,
) => {
	const cntCntPlayPerTimeChunk = getCntPlayPerTimeChunk(
		cntPlay,
		startTime,
		endTime,
		timeChunk,
	)
	const rounded = round(cntCntPlayPerTimeChunk, 2)
	if (rounded === cntPlay) return appendUnit('⚠️' + cntPlay, '회')

	const result = isInteger(rounded)
		? floor(rounded).toString()
		: rounded.toString()

	return appendUnit(result, '회')
}
/** 두 시간 간의 차이를 분 단위로 반환 */
export const getFormattedMinuteDiff = (
	timestamp1: number,
	timestamp2: number,
) => {
	const minuteDiff = getTimeDiffInMinute(timestamp1, timestamp2)
	return appendUnit(minuteDiff, '분')
}

/** 단위 붙히기 */
export const appendUnit = <T extends string | number>(value: T, unit: string) =>
	[value, unit].join(' ')
