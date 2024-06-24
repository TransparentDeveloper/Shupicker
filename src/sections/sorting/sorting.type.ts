import type {Dispatch, SetStateAction} from 'react'

export type RowTableDataPT = {
	id: string
	name: string
	term: string
	cnt: number
	cntPerTime: string
	isSelected: boolean
	onSelect: Dispatch<SetStateAction<string[]>>
}
