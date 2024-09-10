import type {TMember, TOrder} from '@/types'
import {
	compareWithNumber,
	compareWithString,
	isLess,
	shallowCopy,
} from './common'
import {getCurStamp} from './time'

/** 멤버 생성 */
export const createMember = (props: TMember) => {
	const member: TMember = {
		...props,
	}
	return member
}
/** 입력된 id 를 가진 멤버 반환 */
export const findMemberById = (members: TMember[], id: string) =>
	members.find((member) => member.id === id)
/** "이름" 을 기준으로 멤버 배열 정렬 */
export const sortMembersByName = (members: TMember[], order: TOrder) => {
	const _members = shallowCopy(members)
	_members.sort((member1, member2) => {
		const name1 = member1.name
		const name2 = member2.name
		if (order === 'desc') return compareWithString(name2, name1)
		return compareWithString(name1, name2)
	})
	return _members
}
/** "플레이 횟수" 를 기준으로 멤버 배열 정렬 */
export const sortMembersByPlay = (members: TMember[], order: TOrder) => {
	const _members = shallowCopy(members)
	_members.sort((member1, member2) => {
		const play1 = member1.cntPlay
		const play2 = member2.cntPlay
		if (order === 'desc') return compareWithNumber(play2, play1)
		return compareWithNumber(play1, play2)
	})
	return _members
}
/** "(현 시각) ~ (멤버 등록 시각)" 을 기준으로 멤버 배열 정렬 */
export const sortMembersByAge = (members: TMember[], order: TOrder) => {
	const _members = shallowCopy(members)
	const curStamp = getCurStamp()

	_members.sort((member1, member2) => {
		const age1 = curStamp - member1.createAt
		const age2 = curStamp - member2.createAt
		if (order === 'desc') return compareWithNumber(age2, age1)
		return compareWithNumber(age1, age2)
	})
	return _members
}
/** "등록 이후, 기준 시간(분) 당 평균 플레이 횟수" 를 기준으로 멤버 배열 정렬  */
export const sortMembersByPlayPerTime = (
	members: TMember[],
	order: TOrder,
	minute: number,
) => {
	const _members = shallowCopy(members)
	const curStamp = getCurStamp()

	_members.sort((member1, member2) => {
		const age1 = (curStamp - member1.createAt) / (1000 * 60)
		const age2 = (curStamp - member2.createAt) / (1000 * 60)

		const play1 = member1.cntPlay
		const play2 = member2.cntPlay

		const playPerAge1 = isLess(age1, minute) ? play1 : (play1 * minute) / age1
		const playPerAge2 = isLess(age2, minute) ? play2 : (play2 * minute) / age2

		if (order === 'desc') return compareWithNumber(playPerAge2, playPerAge1)
		return compareWithNumber(playPerAge1, playPerAge2)
	})

	return _members
}
/** 등록 이후, 기준 시간(분) 당 평균 플레이 횟수 계산 */
export const getAvgPlayPerTime = (member: TMember, minute: number) => {
	const curStamp = getCurStamp()
	const createAt = member.createAt
	const play = member.cntPlay

	const millisecondAge = curStamp - createAt
	const minuteAge = millisecondAge / (1000 * 60)

	if (isLess(minuteAge, minute)) return play
	return (play * minute) / minuteAge
}
/** (현 시각) ~ (멤버 생성 시각), 분 단위로 반환 */
export const getMinuteAge = (member: TMember) => {
	const curStamp = getCurStamp()
	const createAt = member.createAt

	const millisecondAge = curStamp - createAt
	const minuteAge = millisecondAge / (1000 * 60)

	return Math.floor(minuteAge)
}
