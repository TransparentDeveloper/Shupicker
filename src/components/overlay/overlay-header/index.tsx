import { ColumnFlexBox } from '@/components'
import * as S from './overlay-header.style'
import type * as T from './overlay-header.type'

const OverlayHeader = ({ overlayName, children }: T.OverlayHeaderProps) => {
	return (
		<ColumnFlexBox gap="1.2rem">
			<S.OverlayNameText>{overlayName}</S.OverlayNameText>
			{children}
		</ColumnFlexBox>
	)
}
export default OverlayHeader
