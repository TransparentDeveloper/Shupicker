import { OverlayBase } from '@/components'
import { OVERLAY_ADDING_TRAIT } from '@/constants'
import { useCloseOverlay } from '@/hooks'

const AddingTrait = () => {
	const { isVisible, onClose } = useCloseOverlay(OVERLAY_ADDING_TRAIT)

	if (!isVisible) return
	return <OverlayBase {...{ onClose }}>AddingTrait</OverlayBase>
}

export default AddingTrait
