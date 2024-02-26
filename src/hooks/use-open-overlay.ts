import { OverlayState } from '@/libs/recoil'
import { useRecoilState } from 'recoil'

export const useOpenOverlay = (overlayKey: string) => {
	const [overlayState, setOverlayState] = useRecoilState(OverlayState)
	const onOpen = () => {
		setOverlayState({ isOpen: true, overlayKey: overlayKey })
	}
	return { isOpen: overlayState.isOpen, onOpen }
}
