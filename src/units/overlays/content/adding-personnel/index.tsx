import {
	Button,
	DropBox,
	Grid,
	GridElement,
	Input,
	OverlayBase,
	OverlayHeader,
	Spacer
} from '@/components'
import {
	OVERLAY_ADDING_PERSONNEL,
	URL_PARAM_ADDITIONAL_TRAIT,
	URL_PARAM_PERSONNEL
} from '@/constants'
import { useCloseOverlay, useManageUrlArray } from '@/hooks'
import {
	BORDER_SOLID,
	FLEX_CENTER,
	FLEX_START,
	JUSTIFY_END_CSS
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { AdditionalTraitType, PersonnelType } from '@/types'
import { arrayEncoder, getShupickerTime, getTimeStamp } from '@/utils'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const AddingPersonnel = () => {
	const { isVisible, onClose } = useCloseOverlay(OVERLAY_ADDING_PERSONNEL)
	const { getArray: getPersonnelArray } = useManageUrlArray<PersonnelType>(URL_PARAM_PERSONNEL)
	const { getArray: getAdditionalTraitArray } = useManageUrlArray<AdditionalTraitType>(
		URL_PARAM_ADDITIONAL_TRAIT
	)
	const [param, setParams] = useSearchParams()

	const onHandleComplete = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		// 참가자 정보 추가
		const personnelArray = getPersonnelArray()
		const userId = getTimeStamp()
		const userName = (e.target.elements.item(0) as HTMLInputElement).value
		personnelArray.push({
			id: userId,
			name: userName,
			joinedAt: getShupickerTime(),
			joinCount: 0
		})
		const encodedPersonnelArray = arrayEncoder<PersonnelType>(personnelArray)
		param.set(URL_PARAM_PERSONNEL, encodedPersonnelArray)

		// 추가 특성 정보 갱신
		const additionalTraitArray = getAdditionalTraitArray()
		const numAdditionalTrait = additionalTraitArray.length
		for (let i = 0; i < numAdditionalTrait; i++) {
			const traitValue = (e.target.elements.item(i + 1) as HTMLSelectElement).value
			additionalTraitArray[i].values.push({ userId, value: traitValue })
		}
		const encodedAdditionalTraitArray = arrayEncoder<AdditionalTraitType>(additionalTraitArray)
		param.set(URL_PARAM_ADDITIONAL_TRAIT, encodedAdditionalTraitArray)

		setParams(param)
		onClose()
	}

	if (!isVisible) return
	return (
		<OverlayBase width="45rem" height="25rem" {...{ onClose }}>
			<OverlayHeader overlayName="인원 추가" />
			<form onSubmit={onHandleComplete}>
				<S.MainContent>
					<Grid rows={2}>
						<GridElement row={1}>
							<S.TraitKeyWrapper>이름</S.TraitKeyWrapper>
						</GridElement>
						<GridElement row={2}>
							<S.TraitValueWrapper>
								<Input
									name="participantName"
									width="100%"
									fontSize={FONT_SIZE.sm}
									bgColor="transparent"
									placeholder="이름 입력"
								/>
							</S.TraitValueWrapper>
						</GridElement>
					</Grid>

					{getAdditionalTraitArray()?.map((trait, traitIndex) => (
						<Grid rows={2} key={traitIndex}>
							<GridElement row={1}>
								<S.TraitKeyWrapper>{trait.name}</S.TraitKeyWrapper>
							</GridElement>
							<GridElement row={2}>
								<S.TraitValueWrapper>
									<DropBox options={trait.options} width="90%" bgColor="transparent" />
								</S.TraitValueWrapper>
							</GridElement>
						</Grid>
					))}
				</S.MainContent>
				<Spacer y={0.1} />
				<S.ButtonWrapper>
					<Button type="submit">추가하기</Button>
					<Spacer x={2} />
				</S.ButtonWrapper>
			</form>
		</OverlayBase>
	)
}

export default AddingPersonnel

const MainContent = styled.main`
	${FLEX_START}
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
