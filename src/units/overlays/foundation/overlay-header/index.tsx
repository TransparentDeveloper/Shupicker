import { Spacer } from '@/components'
import * as S from './overlay-header.style'
import type * as T from './overlay-header.type'

const OverlayHeader = ({ overlayName }: T.OverlayHeaderProps) => {
	return (
		<>
			<S.Container>
				<S.OverlayNameText>{overlayName}</S.OverlayNameText>
			</S.Container>
			<Spacer y={1} />
		</>
	)
}
export default OverlayHeader
