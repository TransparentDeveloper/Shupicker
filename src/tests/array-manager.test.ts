import {removeSomePrimitiveElement} from '@/utils/array-manager'
import {expect, test} from 'vitest'

test('removeSomePrimitiveElement()', () => {
	const target = 100
	const before = Array.from(
		{length: Math.floor(Math.random() * 10)},
		() => Math.floor(Math.random() * 100),
		target,
	)
	const after = removeSomePrimitiveElement(before, target)
	expect(after).not.toContain(target)
})
