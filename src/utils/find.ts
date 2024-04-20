import type { MemberTableType, MemberType, TraitType } from '@/types'
export const findEssentialTraitById = (member: MemberType, traitId: number) => {
	const found = member.essentialTraits.find((trait) => trait.id === traitId) as TraitType
	return found.value
}
export const findMemberById = (memberArray: MemberTableType, memberId: number): MemberType => {
	const found = memberArray.find((member) => member.id === memberId)
	if (!!!found) throw Error('Member not found.')
	return found
}
