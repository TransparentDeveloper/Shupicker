import { ATOM_ANCHOR_TIME } from '@/constants'
import { getFormattedCurTime } from '@/utils'
import { atom } from 'recoil'
export const anchorTimeAtom = atom({
	key: ATOM_ANCHOR_TIME,
	default: getFormattedCurTime()
})
