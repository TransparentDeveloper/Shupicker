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
