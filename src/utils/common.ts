import { getMinuteDifference } from '.'

// 단순 연산

/**
 * @description 단위시간 당 평균구하기
 */
export const getAverageJoinCountPerUnitMinute = (
	anchorTime: number, // 기준 시각
	creationTime: number, // 생성 시각
	joinCount: number, // 참여 횟수
	unitMinute: number // 단위시간
) => {
	const timeDiffMinute = getMinuteDifference(anchorTime, creationTime)
	const minuteRate = timeDiffMinute / unitMinute
	const result = (joinCount / minuteRate).toFixed(2) // 소수점 두번째 자리까지 반환
	return parseFloat(result)
}
