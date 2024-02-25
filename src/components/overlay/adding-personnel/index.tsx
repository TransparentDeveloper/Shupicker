import { Button, Grid, GridElement, Input, OverlayBase, OverlayHeader, Spacer } from '@/components'
import { usePostPersonnel } from '@/hooks'
import { IsOpenOverlayAtom } from '@/libs/recoil'
import { BORDER_SOLID, FLEX_CENTER, JUSTIFY_END_CSS } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { getShupickerTime } from '@/utils'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

export type AddingPersonnel = {
	width?: string
	height?: string
}

const AddingPersonnel = ({ width, height }: AddingPersonnel) => {
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
		<OverlayBase {...{ width }} {...{ height }}>
			<OverlayHeader overlayName="인원 추가" />
			<S.MainContent>
				<Grid rows={2}>
					<GridElement row={1}>
						<S.TraitKeyWrapper>이름</S.TraitKeyWrapper>
					</GridElement>
					<GridElement row={2}>
						<S.TraitValueWrapper>
							<Input
								width="100%"
								fontSize={FONT_SIZE.sm}
								bgColor="transparent"
								placeholder="이름 입력"
							/>
						</S.TraitValueWrapper>
					</GridElement>
				</Grid>

				<Grid rows={2}>
					<GridElement row={1}>
						<S.TraitKeyWrapper>성별</S.TraitKeyWrapper>
					</GridElement>
					<GridElement row={2}>
						<S.TraitValueWrapper>
							<Input
								width="100%"
								fontSize={FONT_SIZE.sm}
								bgColor="transparent"
								placeholder="성별 입력"
							/>
						</S.TraitValueWrapper>
					</GridElement>
				</Grid>
			</S.MainContent>
			<Spacer y={2}></Spacer>
			<S.ButtonWrapper>
				<Button disabled={true} onClick={onClickCloseOverlay}>
					추가하기
				</Button>
				<Spacer x={2} />
			</S.ButtonWrapper>
		</OverlayBase>
	)
}

export default AddingPersonnel

const MainContent = styled.main`
	${FLEX_CENTER}
	gap: 0.1rem;
	width: 100%;
	height: 50%;
	overflow-x: scroll;

	padding: 1rem 0;
`
const TraitKeyWrapper = styled.div`
	${FLEX_CENTER}

	width: 100%;
	min-width: 16rem;
	height: 100%;

	text-align: center;
	font-size: ${FONT_SIZE.bg};

	${BORDER_SOLID}
	border-bottom: 0.05rem solid ${COLOR.grayScale[700]};

	border-radius: ${BORDER_RADIUS.ti};
	background-color: ${COLOR.grayScale[200]};
`

const TraitValueWrapper = styled.div`
	${FLEX_CENTER}
	width: 100%;
	min-width: 16rem;
	height: 100%;

	text-align: center;

	border-radius: ${BORDER_RADIUS.ti};
	background-color: ${COLOR.grayScale[400]};
`

const ButtonWrapper = styled.div`
	${JUSTIFY_END_CSS}

	width: 100%;
	height: fit-content;
`

const S = {
	MainContent,
	TraitKeyWrapper,
	TraitValueWrapper,
	ButtonWrapper
}
