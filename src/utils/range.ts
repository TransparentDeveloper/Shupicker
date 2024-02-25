export const numberAdjust = (
	currentValue: number,
	lowerLimit: number,
	upperLimit: number
): number => {
	if (upperLimit < lowerLimit) return -1
	if (currentValue < lowerLimit) return lowerLimit
	if (currentValue > upperLimit) return upperLimit
	return currentValue
}
