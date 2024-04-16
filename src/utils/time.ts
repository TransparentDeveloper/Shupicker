export const getFormattedCurTime = () => {
	const date = Date.now()
	const hour = new Date(date).getHours().toString().padStart(2, '0')
	const minute = new Date(date).getMinutes().toString().padStart(2, '0')
	return hour + ':' + minute
}
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
