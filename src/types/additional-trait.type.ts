type TraitValueType = {
	userId: number
	value: string
}
export type AdditionalTraitType = {
	id: number
	name: string
	options: Array<string>
	values: Array<TraitValueType>
}
