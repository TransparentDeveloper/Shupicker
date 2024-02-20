import { CenterFlexBox, PaddingContainer } from '@/components'
import * as S from './overlay-base.style'
import type * as T from './overlay-base.type'

const OverlayBase = ({ children }: T.OverlayBase) => {
	return (
		<S.Wrapper>
			<CenterFlexBox align="bothAlign">
				<S.Card>
					<PaddingContainer horizontal="1rem" vertical="1rem">
						{children}
					</PaddingContainer>
				</S.Card>
			</CenterFlexBox>
		</S.Wrapper>
	)
}

export default OverlayBase
