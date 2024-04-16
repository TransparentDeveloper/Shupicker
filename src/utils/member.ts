// member 관련 정보 수정

import { calMinDiff } from '@/utils'

/**
 * 시간당 평균 참여 횟수 구하기
 */
export const calAvgCntPerUnitMin = (
	anchorTime: string, // 기준시간, hh:mm 형식
	creationTime: string, // 생성시간, hh:mm 형식
	joinCount: number, // 참여 횟수
	unitMinute: number // 단위 시간, 분 단위
) => {
	const minuteDiff = calMinDiff(anchorTime, creationTime)
	if (minuteDiff < unitMinute) return joinCount
	const minuteRate = Math.floor(minuteDiff / unitMinute)
	const result = (joinCount / minuteRate).toFixed(2)
	return parseFloat(result)
}
