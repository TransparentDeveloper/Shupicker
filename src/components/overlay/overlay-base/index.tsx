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
				<S.Card
					onClick={(e) => {
						e.stopPropagation()
					}}
				>
					<PaddingContainer horizontal="5%" vertical="5%">
						<S.CloseButton onClick={onClickCloseOverlay}>X</S.CloseButton>
						{children}
					</PaddingContainer>
				</S.Card>
			</CenterFlexBox>
		</S.Wrapper>
	)
}

export default OverlayBase
