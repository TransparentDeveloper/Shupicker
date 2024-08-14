import _ from 'lodash'

/** 빈 배열을 반환. */
export const getEmptyArray = () => []
/** (배열) 얕은 복사. */
export const shallowArrayCopy = <T>(arr: Array<T>) => [...arr]
/** 배열의 특정 원소를 삭제. */
export const removeSomePrimitiveElement = <T extends number | string>(
	arr: T[],
	target: T,
) => {
	const _arr = [...arr]
	return _.remove(_arr, (element) => element !== target)
}
/** 배열 중, 특정 index 위치의 원소 하나를 제거. */
export const removeOneAtIdx = <T>(arr: T[], idx: number): T[] => {
	if (idx < 0 || idx >= arr.length)
		throw new Error('입력된 인덱스 범위가 배열의 범위를 벗어났습니다.')
	const preArr = arr.slice(0, idx)
	const postArr = arr.slice(idx + 1)
	return preArr.concat(postArr)
}
