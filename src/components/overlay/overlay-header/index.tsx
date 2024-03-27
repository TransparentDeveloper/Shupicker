import * as S from './overlay-header.style'
import type * as T from './overlay-header.type'

const OverlayHeader = ({ overlayName }: T.OverlayHeaderProps) => {
	return (
		<S.Container>
			<S.OverlayNameText>{overlayName}</S.OverlayNameText>
		</S.Container>
	)
}
export default OverlayHeader
