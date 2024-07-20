import type {TSortBy} from '@/types'
import type {Dispatch, SetStateAction} from 'react'

export type RowTableDataPT = {
	id: string
	name: string
	term: string
	cnt: string
	cntPerTime: string
	isSelected: boolean
	onSelect: Dispatch<SetStateAction<string[]>>
}

export type TTableHeadMapper = {
	labels: string[]
	values: TSortBy[]
}
