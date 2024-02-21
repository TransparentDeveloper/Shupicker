import { CenterFlexBox, PaddingContainer } from '@/components'
import { IsOpenOverlayAtom } from '@/libs/recoil'
import { useSetRecoilState } from 'recoil'
import * as S from './overlay-base.style'
import type * as T from './overlay-base.type'

const OverlayBase = ({ children }: T.OverlayBase) => {
	const setIsOpenOverlay = useSetRecoilState(IsOpenOverlayAtom)
	const onClickCloseOverlay = () => setIsOpenOverlay(false)

	return (
		<S.Wrapper onClick={onClickCloseOverlay}>
			<CenterFlexBox align="bothAlign">
				<S.Card>
					<PaddingContainer horizontal="8%" vertical="8%">
						<S.CloseButton onClick={onClickCloseOverlay}>X</S.CloseButton>
						{children}
					</PaddingContainer>
				</S.Card>
			</CenterFlexBox>
		</S.Wrapper>
	)
}

export default OverlayBase
