import { IS_OPEN_OVERLAY_ATOM } from '@/constants'
import { atom } from 'recoil'

export const IsOpenOverlayAtom = atom({
	key: IS_OPEN_OVERLAY_ATOM,
	default: false
})
