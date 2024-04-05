export type TraitType = {
	id: number
	label: string
	hasOption: boolean
	options: Array<string>
	value: string | number
	valueIdx: number // options 의 idx
}

export type TraitTableType = Array<TraitType>
