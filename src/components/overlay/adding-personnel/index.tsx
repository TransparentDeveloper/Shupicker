import { Button, Grid, GridElement, Input, OverlayBase, OverlayHeader } from '@/components'
import { usePostPersonnel } from '@/hooks'
import { IsOpenOverlayAtom } from '@/libs/recoil'
import { DIRECTION_COLUMN, GIANTS_INLINE } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import { getShupickerTime } from '@/utils'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const AddingPersonnel = () => {
	const { savePersonnel } = usePostPersonnel()
	const setIsOpenOverlay = useSetRecoilState(IsOpenOverlayAtom)
	const onClickCloseOverlay = () => {
		savePersonnel({
			id: 1,
			name: '이윤신',
			joinedAt: getShupickerTime(),
			joinCount: 0
		})
		setIsOpenOverlay(false)
	}
	return (
		<OverlayBase>
			<OverlayHeader overlayName="인원 추가">
				<S.TraitInputContainer>
					{Array.from({ length: 8 }).map((_, index) => (
						<Grid columns={3} key={index}>
							<GridElement column={1}>
								<S.TraitText>이름</S.TraitText>
							</GridElement>
							<GridElement column={2} columnSpan={2}>
								<Input width="90%" placeholder="String" />
							</GridElement>
						</Grid>
					))}
				</S.TraitInputContainer>

				<Button size="full" onClick={onClickCloseOverlay}>
					버튼
				</Button>
			</OverlayHeader>
		</OverlayBase>
	)
}

export default AddingPersonnel

const TraitTextWrapper = styled.div`
	width: 100%;
	height: 100%;

	border: 1px;
`
const TraitText = styled.h3`
	color: ${COLOR.grayScale[1200]};
	justify-self: end;
`
const TraitInputContainer = styled.div`
	width: 100%;
	height: 30vh;
	overflow-y: scroll;

	${DIRECTION_COLUMN}
	gap: 5rem;
`

const OverlayNameText = styled.h1`
	${GIANTS_INLINE}
`

const S = {
	TraitText,
	TraitInputContainer,
	OverlayNameText
}
