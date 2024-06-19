export const getTimeStamp = () => Date.now()

export const getFormedTime = (timeStamp: number) => {
	const current = new Date(timeStamp)
	const hour = String(current.getHours()).padStart(2, '0')
	const minute = String(current.getMinutes()).padStart(2, '0')
	return [hour, minute].join(':')
}

export const getTimeDiff = (timeStamp1: number, timeStamp2: number) =>
	Math.abs(timeStamp1 - timeStamp2)
