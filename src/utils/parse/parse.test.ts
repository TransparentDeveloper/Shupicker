import {expect, test} from 'vitest'
import {transStrToArr} from '.'

test('', () => {
	const originalArr = [1, 2, 3, 4, 5]
	const stringify = JSON.stringify(originalArr)
	const transFormed = transStrToArr<number>(stringify)
	expect(transFormed).toMatchObject(originalArr)
})

test('', () => {
	expect(() => {
		transStrToArr('{"a":"123", "b"')
	}).toThrowError('배열로 바꿀 수 없는 문자열입니다.')
})
