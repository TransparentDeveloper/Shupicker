export const getTimeFormatHHMM = (date: number) => {
	const hour = new Date(date).getHours().toString().padStart(2, '0')
	const minute = new Date(date).getMinutes().toString().padStart(2, '0')
	return hour + ':' + minute
}
export const getTimeStamp = () => {
	return new Date().getTime()
}
export const getMinuteDifference = (date1: number, date2: number): number => {
	const differenceMilliseconds = Math.abs(new Date(date1).getTime() - new Date(date2).getTime())
	return Math.floor(differenceMilliseconds / (1000 * 60))
}
