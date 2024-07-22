import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'

export type DeletingGroupConfirmationModalPT = {
	group: TGroup
	groupName: string
	groupMembers: TMember[]
	groupIdx: number
}
