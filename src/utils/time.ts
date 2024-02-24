export const getShupickerTime = () => {
	const hour = new Date().getHours()
	const minute = new Date().getMinutes()
	return hour + ':' + minute
}
