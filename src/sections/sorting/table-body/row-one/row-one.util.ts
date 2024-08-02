import {appendUnit, getTimeDiffInMinute} from '@/utils'
import {floor, isInteger, round} from 'lodash'
import {getCntPlayPerTimeChunk} from '../../sorting.util'

/** 두 시간 간의 차이를 분 단위로 반환 */
export const getFormattedMinuteDiff = (
	timestamp1: number,
	timestamp2: number,
) => {
	const minuteDiff = getTimeDiffInMinute(timestamp1, timestamp2)
	return appendUnit(minuteDiff, '분')
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
	if (rounded === cntPlay) return appendUnit('⚠️ ' + cntPlay, '회')

	const result = isInteger(rounded)
		? floor(rounded).toString()
		: rounded.toString()

	return appendUnit(result, '회')
}
