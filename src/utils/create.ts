import type { GroupType } from '@/types'
import { getTimeStamp } from '@/utils'

export const createGroup = (memberIdArray: Array<number>): GroupType => ({
	id: getTimeStamp(),
	memberIdArray
})
