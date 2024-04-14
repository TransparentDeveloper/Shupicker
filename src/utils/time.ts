export const getTimeFormatHHMM = (date: number) => {
	const hour = new Date(date).getHours().toString().padStart(2, '0')
	const minute = new Date(date).getMinutes().toString().padStart(2, '0')
	return hour + ':' + minute
}
export const getFormattedCurTime = () => getTimeFormatHHMM(Date.now())
export const getTimeStamp = () => {
	return new Date().getTime()
}
export const calTotMin = (
	time: string // hh:mm 형식
): number => {
	const [hour, minute] = time.split(':').map(Number)
	return hour * 60 + minute
}
export const calMinDiff = (
	time1: string, // hh:mm 형식
	time2: string // hh:mm 형식
) => {
	const totalMinutes1 = calTotMin(time1)
	const totalMinutes2 = calTotMin(time2)
	return totalMinutes1 - totalMinutes2
}
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
