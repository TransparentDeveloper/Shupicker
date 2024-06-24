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
