import type {TGroup} from '@/types/group'
import {generateID} from './uuid'

export const createNewGroup = (memberIds: string[]): TGroup => ({
	id: generateID(),
	memberIds,
})
