import type { PersonnelType, SortMethodType } from '@/types'
import { getAverageJoinCountPerUnitMinute } from './common'

/** 참여자 id 기준 정렬 */
export const sortByMemberId = (memberArray: Array<PersonnelType>, sortMethod?: SortMethodType) => {
	sortMethod = sortMethod ?? 'ascend'
	const result = memberArray.sort((member1, member2) => {
		return member2.id - member1.id
	})
	return sortMethod === 'ascend' ? result : result.reverse()
}

/**
 * @description 생성시간 대비 참여횟수 기준 정렬
 */
export const sortByJoinCountRelativeToCreation = (
	memberArray: Array<PersonnelType>,
	unitMinute: number, // 단위시간
	sortMethod?: SortMethodType
): Array<PersonnelType> => {
	sortMethod = sortMethod ?? 'ascend'
	const now = Date.now()
	const result = memberArray.sort((member1, member2) => {
		// 멤버 1의 단위 시간당 평균 참여횟수
		const joinCountPerUnitTime1 = getAverageJoinCountPerUnitMinute(
			now,
			member1.joinedAt,
			member1.joinCount,
			unitMinute
		)
		// 멤버 2의 단위 시간당 평균 참여횟수
		const joinCountPerUnitTime2 = getAverageJoinCountPerUnitMinute(
			now,
			member2.joinedAt,
			member2.joinCount,
			unitMinute
		)
		if (joinCountPerUnitTime2 === joinCountPerUnitTime1)
			return member2.joinCount - member1.joinCount
		return joinCountPerUnitTime2 - joinCountPerUnitTime1
	})
	return sortMethod === 'ascend' ? result : result.reverse()
}
