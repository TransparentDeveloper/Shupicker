import {generateID} from '@/libs/uuid/util'
import type {TMember, TOrder, TSortBy} from '@/types'
import {
	compareWithNumber,
	compareWithString,
	deepCopy,
	shallowCopy,
} from './common'
import {getCurStamp} from './time'

/** 멤버 생성 */
export const createMember = (props: Omit<TMember, 'id'>) => {
	const id = generateID()
	const member: TMember = {
		id,
		...props,
	}
	return member
}
/** 입력된 id 를 가진 멤버 반환 */
export const findMemberById = (members: TMember[], id: string) =>
	members.find((member) => member.id === id)

/** 멤버의 cntPlay 값을 증가시킴 */
export const addMemberPlay = (member: TMember, adding: number) => {
	const _member = shallowCopy(member)
	_member.cntPlay += adding
	return _member
}

/** 멤버 배열을 특정 기준으로 정렬 */
export const sortMembers = (
	members: TMember[],
	sortBy: TSortBy,
	order: TOrder,
) => {
	const _members = deepCopy<TMember[]>(members)
	if (sortBy === 'name') _members.sort(compareMemberWithName)
	if (sortBy === 'createAt') _members.sort(compareMemberWithAge)
	if (sortBy === 'cntPlay') _members.sort(compareMemberWithCntPlay)
	if (sortBy === 'cntPerTime') _members.sort(compareMemberWithPlayPer5Min)

	if (order === 'desc') _members.reverse()
	return _members
}

/** 멤버의 "cntPlay" 비교 */
export const compareMemberWithCntPlay = (
	member1: TMember,
	member2: TMember,
) => {
	const play1 = member1.cntPlay
	const play2 = member2.cntPlay
	return compareWithNumber(play1, play2)
}

/** 멤버의 "이름" 비교 */
export const compareMemberWithName = (member1: TMember, member2: TMember) => {
	const name1 = member1.name
	const name2 = member2.name
	return compareWithString(name1, name2)
}

/** 멤버의 (현 시각) ~ (멤버 생성 시각) 비교 */
export const compareMemberWithAge = (member1: TMember, member2: TMember) => {
	const createAt1 = getMinuteAge(member1)
	const createAt2 = getMinuteAge(member2)
	return compareWithNumber(createAt1, createAt2)
}

/** 멤버의 "5분당 참여 횟수" 비교 */
export const compareMemberWithPlayPer5Min = (
	member1: TMember,
	member2: TMember,
) => {
	const minuteUnit = 5
	const playPerAge1 = getAvgPlayPerMinute(member1, minuteUnit)
	const playPerAge2 = getAvgPlayPerMinute(member2, minuteUnit)
	return compareWithNumber(playPerAge1, playPerAge2)
}

/** 멤버의 평균 분당 플레이 횟수를 계산 */
export const getAvgPlayPerMinute = (member: TMember, minute: number) => {
	const play = member.cntPlay
	const age = getMinuteAge(member)
	if (age === 0) return play
	return (play * minute) / age
}

/** (현 시각) ~ (멤버 생성 시각), 분 단위로 반환 */
export const getMinuteAge = (member: TMember) => {
	const createAt = member.createAt
	const curStamp = getCurStamp()
	const millisecondDiff = Math.abs(curStamp - createAt)
	if (millisecondDiff < 1000 * 60) return 0
	const age = Math.floor(millisecondDiff / (1000 * 60))
	return age
}
