import {isArray, isUndefined} from './type-guard'

/** 얕은 복사 */
export const shallowCopy = <T extends object>(obj: T) => {
	if (isArray(obj)) return [...obj] as T
	return {...obj}
}
/** 깊은 복사 */
export const deepCopy = <T extends object>(obj: T) => {
	return JSON.parse(JSON.stringify(obj)) as T
}
/** 입력이 빈배열인 경우, true 반환 */
export const isEmpty = (arr: unknown[]) => arr.length === 0

/** 두 숫자를 비교하여 차이를 반환 (num1 이 크면 양수, 작으면 음수) */
export const compareWithNumber = (num1: number, num2: number) => num1 - num2

/** 두 문자열을 비교하여 정렬 순서를 반환 (str1 이 앞서면 음수, 같으면 0, 뒤서면 양수) */
export const compareWithString = (str1: string, str2: string) =>
	str1.localeCompare(str2)

/** 배열에서 undefined 요소를 제거하여 새로운 배열 반환 */
export const removeUndefinedElement = <T>(arr: (T | undefined)[]) =>
	arr.filter((element): element is T => !isUndefined(element))

/** 배열에서 특정 요소를 제거하여 새로운 배열 반환 */
export const removeElement = <T>(arr: T[], target: T) =>
	arr.filter((element) => !Object.is(element, target))

/** 배열의 마지막 위치에 새로운 요소를 추가한 배열을 반환 */
export const pushElement = <T>(arr: T[], target: T) => {
	const _arr = [...arr, target]
	return _arr
}

/** 주어진 인덱스의 요소를 제거하여 새로운 배열 반환 */
export const removeElementByIndex = <T>(arr: T[], index: number) => {
	const arrSize = arr.length
	if (index < 0 || arrSize <= index)
		throw new Error('인덱스 범위가 적절하지 못합니다.')
	const preArr = arr.slice(0, index)
	const postArr = arr.slice(index + 1)
	return preArr.concat(postArr)
}

/** 문자열 데이터를 JSON 파싱 후, 지정된 타입의 배열로 변환 */
export const parseArray = <T>(str: string): T[] => {
	try {
		const result = JSON.parse(str)
		if (isArray(result)) return result as T[]
		throw new Error()
	} catch {
		throw new Error('배열로 바꿀 수 없는 문자열입니다.')
	}
}

/** target이 than보다 작은지 확인 */
export const isLess = (target: number, than: number) => target < than

/** target이 than보다 큰지 확인 */
export const isMore = (target: number, than: number) => than < target

/** target과 to가 동일한지 확인 (string 또는 number) */
export const isEqual = <T extends string | number>(target: T, to: T) =>
	Object.is(target, to)

/** 입력(num)을 지정된 소수점까지 잘라서 반환  */
export const truncateToFixedPrecision = (num: number, precision: number) => {
	const multiplier = Math.pow(10, precision)
	const result = Math.trunc(num * multiplier) / multiplier
	return result
}
/** 입력이 정수이면 정수로 변환하고, 아니면 원래 숫자를 반환 */
export const covertToIntIfPossible = (num: number) => {
	if (Number.isInteger(num)) return Math.trunc(num)
	return num
}
/** 현재 값과 옵션 배열 사이를 전환 */
export const toggleBetweenPair = <T extends number | string>(
	current: T,
	options: [T, T],
) => {
	if (current === options[0]) return options[1]
	return options[0]
}
