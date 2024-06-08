import type {TMember, TTrait} from '@/types'
import {getTimeStamp} from '@/utils'
import {generateID} from '@/utils/uuid'

export const createNewMember = (name: string): TMember => ({
	id: generateID(),
	name,
	createAt: getTimeStamp(),
	cntPlay: 0,
	traits: [],
})
export const createNewTrait = (label: string, options: string[]): TTrait => ({
	id: generateID(),
	label,
	idx: 0,
	options,
})
export const addTraitEachMember = (
	memberArr: TMember[],
	newTrait: TTrait,
): TMember[] =>
	memberArr.map((member) => {
		member.traits.push(newTrait)
		return member
	})
