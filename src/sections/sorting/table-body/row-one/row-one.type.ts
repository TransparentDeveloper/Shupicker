import type {TMember} from '@/types'
import type {Dispatch, SetStateAction} from 'react'

export type RowOnePT = {
	member: TMember
	isSelected: boolean
	onSelect: Dispatch<SetStateAction<string[]>>
}
