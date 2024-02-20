import { CenterFlexBox, CompressionContainer } from '..'
import * as S from './overlay-base.style'
import type * as T from './overlay-base.type'

const OverlayBase = ({ children }: T.OverlayBase) => {
	return (
		<S.Wrapper>
			<CenterFlexBox align="bothAlign">
				<S.Card>
					<CompressionContainer horizontal="1rem" vertical="1rem">
						{children}
					</CompressionContainer>
				</S.Card>
			</CenterFlexBox>
		</S.Wrapper>
	)
}

export default OverlayBase
