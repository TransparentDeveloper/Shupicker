import {isArray} from 'lodash'

export const transStrToArr = <T>(input: string): Array<T> => {
	try {
		const result = JSON.parse(input)
		if (isArray(result)) return result
		throw Error
	} catch {
		throw Error('배열로 바꿀 수 없는 문자열입니다.')
	}
}
