import {expect, test} from 'vitest'
import {compress, decompress} from '.'

test('압축 전과 압축해제 후의 값이 일치해야 한다.', () => {
	const originalString = 'originalString'
	const compressed = compress(originalString)
	const decompressed = decompress(compressed)
	expect(originalString).toBe(decompressed)
})
