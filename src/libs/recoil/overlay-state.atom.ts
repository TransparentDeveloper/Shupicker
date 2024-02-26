import { ATOM_OVERLAY_STATE } from '@/constants'
import { atom } from 'recoil'

type OverlayStateProps = {
	isOpen: boolean
	overlayKey: string | null
}

export const OverlayState = atom<OverlayStateProps>({
	key: ATOM_OVERLAY_STATE,
	default: {
		isOpen: true,
		overlayKey: null
	}
})
