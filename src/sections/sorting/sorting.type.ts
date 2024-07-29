import type {TMember, TSortBy} from '@/types'
import type {Dispatch, SetStateAction} from 'react'

export type RowTableDataPT = {
	member: TMember
	isSelected: boolean
	onSelect: Dispatch<SetStateAction<string[]>>
}

export type TTableHeadMapper = {
	labels: string[]
	values: TSortBy[]
}
