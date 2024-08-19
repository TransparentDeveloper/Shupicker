import {
	compareWithNumber,
	compareWithString,
	deepCopy,
	isEmpty,
	parseArray,
	removeElement,
	removeElementByIndex,
	removeUndefinedElement,
	shallowCopy,
} from '@/functions/common'
import {describe, expect, test} from 'vitest'

describe('shallowCopy', () => {
	const originalArr = [
		[1, 2, 3],
		[101, 102, 103],
		[201, 202, 203],
	]
	const originalObj = {
		obj1: {obj11: 11, obj12: 12, obj13: 13},
		obj2: {obj21: 21, obj22: 22, obj23: 23},
		obj3: {obj31: 31, obj32: 32, obj33: 33},
	}
	// 배열에 대한 테스트
	test('배열 원본과 복사본이 같은 내용을 가지고 있는지 확인', () => {
		const copiedArr = shallowCopy(originalArr)
		expect(copiedArr).toEqual(originalArr)
	})
	test('배열 원본과 복사본이 다른 참조를 가지고 있는지 확인', () => {
		const copiedArr = shallowCopy(originalArr)
		expect(copiedArr).not.toBe(originalArr)
	})
	test('배열의 최상위 요소들이 같은 참조를 가지는지 확인', () => {
		const copiedArr = shallowCopy(originalArr)
		const arrSize = originalArr.length

		for (let index = 0; index < arrSize; index++) {
			expect(copiedArr[index]).toBe(originalArr[index])
		}
	})
	test('배열 내부 값들이 같은 참조를 가지는지 확인', () => {
		const copiedArr = shallowCopy(originalArr)
		const rowSize = originalArr.length
		for (let row = 0; row < rowSize; row++) {
			const colSize = originalArr[row].length
			for (let col = 0; col < colSize; col++)
				expect(copiedArr[row][col]).toBe(originalArr[row][col])
		}
	})

	// 객체에 대한 테스트
	test('객체 원본과 복사본이 같은 내용을 가지고 있는지 확인', () => {
		const copiedObj = shallowCopy(originalObj)
		expect(copiedObj).toEqual(originalObj)
	})
	test('객체 원본과 복사본이 다른 참조를 가지고 있는지 확인', () => {
		const copiedObj = shallowCopy(originalObj)
		expect(copiedObj).not.toBe(originalObj)
	})
	test('객체의 최상위 속성들이 같은 참조를 가지는지 확인', () => {
		const copiedObj = shallowCopy(originalObj)
		for (const key of Object.keys(originalObj))
			expect(copiedObj[key as keyof typeof originalObj]).toBe(
				originalObj[key as keyof typeof originalObj],
			)
	})
	test('객체 내부 값들이 같은 참조를 가지는지 확인', () => {
		const copiedObj = shallowCopy(originalObj)
		expect(copiedObj.obj1.obj11).toBe(originalObj.obj1.obj11)
		expect(copiedObj.obj2.obj22).toBe(originalObj.obj2.obj22)
		expect(copiedObj.obj3.obj33).toBe(originalObj.obj3.obj33)
	})
})

describe('deepCopy', () => {
	const originalObj = {
		obj1: {obj11: 11, obj12: 12, obj13: 13},
		obj2: {obj21: 21, obj22: 22, obj23: 23},
		obj3: {obj31: 31, obj32: 32, obj33: 33},
	}

	test('객체 원본과 복사본이 같은 내용을 가지고 있는지 확인', () => {
		const copiedObj = deepCopy(originalObj)
		expect(copiedObj).toEqual(originalObj)
	})

	test('객체 원본과 복사본이 다른 참조를 가지고 있는지 확인', () => {
		const copiedObj = deepCopy(originalObj)
		expect(copiedObj).not.toBe(originalObj)
	})

	test('객체 내부 값들이 다른 참조를 가지는지 확인', () => {
		const copiedObj = deepCopy(originalObj)
		expect(copiedObj.obj1).not.toBe(originalObj.obj1)
		expect(copiedObj.obj2).not.toBe(originalObj.obj2)
		expect(copiedObj.obj3).not.toBe(originalObj.obj3)
	})
})

describe('isEmpty', () => {
	test('빈 배열이면 true를 반환', () => {
		expect(isEmpty([])).toBe(true)
	})

	test('빈 배열이 아니면 false를 반환', () => {
		expect(isEmpty([1, 2, 3])).toBe(false)
	})
})

describe('compareWithNumber', () => {
	test('첫 번째 숫자가 크면 양수를 반환', () => {
		expect(compareWithNumber(10, 5)).toBeGreaterThan(0)
	})

	test('두 숫자가 같으면 0을 반환', () => {
		expect(compareWithNumber(5, 5)).toBe(0)
	})

	test('첫 번째 숫자가 작으면 음수를 반환', () => {
		expect(compareWithNumber(5, 10)).toBeLessThan(0)
	})
})

describe('compareWithString', () => {
	test('첫 번째 문자열이 사전적으로 앞서면 음수를 반환', () => {
		expect(compareWithString('apple', 'banana')).toBeLessThan(0)
	})

	test('두 문자열이 같으면 0을 반환', () => {
		expect(compareWithString('apple', 'apple')).toBe(0)
	})

	test('첫 번째 문자열이 사전적으로 뒤서면 양수를 반환', () => {
		expect(compareWithString('banana', 'apple')).toBeGreaterThan(0)
	})
})

describe('removeUndefinedElement', () => {
	test('배열에서 undefined 요소를 제거하여 반환', () => {
		const arr = [1, undefined, 2, undefined, 3]
		const result = removeUndefinedElement(arr)
		expect(result).toEqual([1, 2, 3])
	})

	test('배열에 undefined가 없으면 원래 배열을 그대로 반환', () => {
		const arr = [1, 2, 3]
		const result = removeUndefinedElement(arr)
		expect(result).toEqual([1, 2, 3])
	})
})

describe('removeElement', () => {
	test('배열에서 특정 요소를 제거하여 반환', () => {
		const arr = [1, 2, 3, 4, 3]
		const result = removeElement(arr, 3)
		expect(result).toEqual([1, 2, 4])
	})

	test('배열에 요소가 없으면 원래 배열을 그대로 반환', () => {
		const arr = [1, 2, 3]
		const result = removeElement(arr, 4)
		expect(result).toEqual([1, 2, 3])
	})
})

describe('removeElementByIndex', () => {
	test('주어진 인덱스의 요소를 제거하여 반환', () => {
		const arr = [1, 2, 3, 4]
		const result = removeElementByIndex(arr, 2)
		expect(result).toEqual([1, 2, 4])
	})

	test('인덱스가 범위를 벗어나면 에러를 던짐', () => {
		const arr = [1, 2, 3, 4]
		const arrFirstIndex = 0
		const arrLastIndex = arr.length - 1
		expect(() => removeElementByIndex(arr, arrLastIndex + 1)).toThrowError(
			'인덱스 범위가 적절하지 못합니다.',
		)
		expect(() => removeElementByIndex(arr, arrFirstIndex - 1)).toThrowError(
			'인덱스 범위가 적절하지 못합니다.',
		)
	})
})

describe('parseArray', () => {
	test('JSON 문자열을 배열로 변환', () => {
		const jsonString = '[1, 2, 3, 4]'
		const result = parseArray<number>(jsonString)
		expect(result).toEqual([1, 2, 3, 4])
	})

	test('JSON 문자열이 배열이 아니면 에러를 던짐', () => {
		const jsonString = '{"key": "value"}'
		expect(() => parseArray(jsonString)).toThrowError(
			'배열로 바꿀 수 없는 문자열입니다.',
		)
	})

	test('유효하지 않은 JSON 문자열이면 에러를 던짐', () => {
		const invalidJsonString = 'invalid json'
		expect(() => parseArray(invalidJsonString)).toThrowError(
			'배열로 바꿀 수 없는 문자열입니다.',
		)
	})
})
