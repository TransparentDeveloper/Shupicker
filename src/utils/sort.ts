import { ESSENTIAL_TRAIT_CREATION_TIME_ID, ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID } from '@/constants'
import type { MemberTableType, MemberType, SortMethodType } from '@/types'
import { calAvgCntPerUnitMin, getFormattedCurTime } from '@/utils'
import { findEssentialTraitById } from './find'

const sortByUnitTime = (
	memberA: MemberType,
	memberB: MemberType,
	current: string, // 현재 시각, hh:mm 형식
	sortMethod: SortMethodType, // 정렬 방법
	unitMinute: number // 단위 시간, 분 단위
) => {
	const creationTimeA = findEssentialTraitById(memberA, ESSENTIAL_TRAIT_CREATION_TIME_ID) as string
	const participationCntA = findEssentialTraitById(
		memberA,
		ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID
	) as number
	const averageCountA = calAvgCntPerUnitMin(current, creationTimeA, participationCntA, unitMinute)

	const creationTimeB = findEssentialTraitById(memberB, ESSENTIAL_TRAIT_CREATION_TIME_ID) as string
	const participationCntB = findEssentialTraitById(
		memberB,
		ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID
	) as number
	const averageCountB = calAvgCntPerUnitMin(current, creationTimeB, participationCntB, unitMinute)

	if (sortMethod === 'ascend') return averageCountA - averageCountB
	return averageCountB - averageCountA
}

/**
 * 단위 시간(분) 당 참여횟수를 우선
 * @default unitMinute 5
 */
export const getSortedArrayByUnitTime = (
	memberArray: MemberTableType,
	sortMethod: SortMethodType,
	unitMinute: number = 5
) => {
	const current = getFormattedCurTime()
	const sortedMemberArray = memberArray.sort((memberA, memberB) =>
		sortByUnitTime(memberA, memberB, current, sortMethod, unitMinute)
	)
	return sortedMemberArray
}
