import type { PersonnelType, SortMethodType } from '@/types'
import { getMinuteDifference } from '.'

/** 참여자 이름 기준 정렬 */
export const sortByMemberName = (memberArray: Array<PersonnelType>) => {}

/** 생성시간 대비 참여횟수 기준 정렬 */
export const sortByJoinCountRelativeToCreation = (
	memberArray: Array<PersonnelType>,
	unitMinute: number,
	sortMethod: SortMethodType
): Array<PersonnelType> => {
	const now = Date.now()

	const result = memberArray.sort((member1, member2) => {
		// 멤버 1의 단위 시간당 평균 참여횟수
		let joinCountPerUnitTime1 = member1.joinCount
		const timeDiffFromCreation1 = getMinuteDifference(now, member1.joinedAt)
		if (timeDiffFromCreation1 > unitMinute)
			joinCountPerUnitTime1 = (joinCountPerUnitTime1 / timeDiffFromCreation1) * 10
		// 멤버 2의 단위 시간당 평균 참여횟수
		let joinCountPerUnitTime2 = member2.joinCount
		const timeDiffFromCreation2 = getMinuteDifference(now, member1.joinedAt)
		if (timeDiffFromCreation2 > unitMinute)
			joinCountPerUnitTime2 = (joinCountPerUnitTime2 / timeDiffFromCreation2) * 10

		// 오름차순 정렬
		if (sortMethod === 'ascend') {
			return joinCountPerUnitTime2 - joinCountPerUnitTime1
		}
		return joinCountPerUnitTime1 - joinCountPerUnitTime2
	})

	return result
}
