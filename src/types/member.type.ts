import { TraitType } from '.'

export type MemberType = {
	id: number
	essentialTraits: Array<TraitType>
	additionalTraits: Array<TraitType>
}
export type MemberTableType = Array<MemberType>
