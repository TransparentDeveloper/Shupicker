import { CenterFlexBox, PaddingContainer } from '@/components'
import * as S from './overlay-base.style'
import type * as T from './overlay-base.type'

const OverlayBase = ({
	width = '60dvw',
	height = '60dvh',
	onClose,
	children
}: T.OverlayBaseProps) => {
	return (
		<S.Wrapper onClick={onClose}>
			<CenterFlexBox align="bothAlign">
				<S.Card
					$width={width}
					$height={height}
					onClick={(e) => {
						e.stopPropagation()
					}}
				>
					<PaddingContainer horizontal="5%" vertical="5%">
						<S.CloseButton onClick={onClose}>X</S.CloseButton>
						{children}
					</PaddingContainer>
				</S.Card>
			</CenterFlexBox>
		</S.Wrapper>
	)
}

export default OverlayBase
