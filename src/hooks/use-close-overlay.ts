import { OverlayState } from '@/libs/recoil'
import { useRecoilState } from 'recoil'

export const useCloseOverlay = (overlayKey: string) => {
	const [overlayState, setOverlayState] = useRecoilState(OverlayState)
	let isVisible = overlayState.isOpen && overlayState.overlayKey === overlayKey
	const onClose = () => setOverlayState({ isOpen: false, overlayKey: null })
	return { isVisible, onClose }
}
