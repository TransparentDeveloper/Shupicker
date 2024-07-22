import _ from 'lodash'

/**
 * 빈 배열을 반환합니다.
 */
export const getEmptyArray = () => []

/**
 * 배열의 특정 원소를 삭제합니다.
 */
export const removeSomePrimitiveElement = <T extends number | string>(
	arr: T[],
	target: T,
) => {
	const _arr = [...arr]
	return _.remove(_arr, (element) => element !== target)
}

export const removeOneAtIdx = <T>(arr: T[], idx: number): T[] => {
	if (idx < 0 || idx >= arr.length)
		throw new Error('입력된 인덱스 범위가 배열의 범위를 벗어났습니다.')
	return arr.slice(0, idx).concat(arr.slice(idx + 1))
}
