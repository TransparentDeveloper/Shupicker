import { ATOM_IS_OPEN_OVERLAY } from '@/constants'
import { atom } from 'recoil'

export const IsOpenOverlayAtom = atom({
	key: ATOM_IS_OPEN_OVERLAY,
	default: false
})
