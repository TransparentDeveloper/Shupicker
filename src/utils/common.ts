import { getMinuteDifference } from '.'

/**
 * 단순 연산
 */
export const getAverageJoinCountPerUnitMinute = (
	anchorTime: number,
	creationTime: number,
  joinCount: number,
  unitMinute: number,
) => {
  const timeDiff = getMinuteDifference(anchorTime, creationTime)
  if(timeDiff > )
}
