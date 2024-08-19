import {padStart} from 'lodash'

/** 현재 시각 반환 (timestamp) */
export const getCurStamp = () => {
	return Date.now()
}

export const formatHHMM = (timestamp: number) => {
	const hour = getHourFromStamp(timestamp).toString()
	const minute = getMinuteFromStamp(timestamp).toString()

	const paddedHour = padStart(hour, 2, '0')
	const paddedMinute = padStart(minute, 2, '0')

	return [paddedHour, paddedMinute].join(':')
}

export const getHourFromStamp = (timestamp: number) => {
	const dateObj = new Date(timestamp)
	return dateObj.getHours()
}

export const getMinuteFromStamp = (timestamp: number) => {
	const dateObj = new Date(timestamp)
	return dateObj.getMinutes()
}
