import type {TMember} from '@/types'
import type {Dispatch, SetStateAction} from 'react'

export type TableBodyPT = {
	sortedMembers: TMember[]
	selectedMemberIds: string[]
	setSelectedMemberIds: Dispatch<SetStateAction<string[]>>
}
