export const getTimeStamp = () => Date.now()

export const getFormedTime = (timeStamp: number) => {
	const current = new Date(timeStamp)
	const hour = current.getHours()
	const minute = current.getMinutes()
	return [hour, minute].join(':')
}
