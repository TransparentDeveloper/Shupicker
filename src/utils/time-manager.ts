/** kst 기준, 현재 시각을 timestamp 로 반환 */
export const getTimeStamp = () => Date.now()
export const getFormattedTime = (timeStamp: number) => {
	const current = new Date(timeStamp)
	const hour = String(current.getHours()).padStart(2, '0')
	const minute = String(current.getMinutes()).padStart(2, '0')
	return [hour, minute].join(':')
}
/** 두 timestamp 간, 차이를 반환 */
export const getTimeDiff = (timeStamp1: number, timeStamp2: number) =>
	Math.abs(timeStamp1 - timeStamp2)
/** 두 timestamp 간, 차이를 '분' 단위로 반환 */
export const getTimeDiffInMinute = (timeStamp1: number, timeStamp2: number) => {
	const timeDiff = getTimeDiff(timeStamp1, timeStamp2)
	return Math.floor(timeDiff / (1000 * 60))
}
/** timestamp 를 입력받아 시간 단위 중, '분' 만 반환 */
export const getMinuteFromStamp = (timeStamp: number) =>
	new Date(timeStamp).getMinutes()
/** 시간 단위(hour, minute 등) 을 입력받아, 항상 2자리 string 으로 반환 */
export const padStartForTime = (timeUnit: number) =>
	timeUnit.toString().padStart(2, '0')
