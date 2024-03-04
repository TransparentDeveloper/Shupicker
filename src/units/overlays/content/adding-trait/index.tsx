import {
	Button,
	CenterFlexBox,
	ColumnFlexBox,
	Grid,
	GridElement,
	IconButton,
	Input,
	OverlayBase,
	OverlayHeader,
	Spacer
} from '@/components'
import { OVERLAY_ADDING_TRAIT, URL_PARAM_ADDITIONAL_TRAIT, URL_PARAM_PERSONNEL } from '@/constants'
import { useCloseOverlay, useManageUrlArray } from '@/hooks'
import { FLEX_CENTER, FLEX_END, FLEX_START } from '@/libs/styled-components/css-utils'
import { FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import type { AdditionalTraitType, PersonnelType } from '@/types'
import { getTimeStamp } from '@/utils'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { TaggingTrait } from './components'

const AddingTrait = () => {
	const { isVisible, onClose } = useCloseOverlay(OVERLAY_ADDING_TRAIT)
	const { getArray: getPersonnelArray } = useManageUrlArray<PersonnelType>(URL_PARAM_PERSONNEL)
	const { addElementOne: addAdditionalTrait } = useManageUrlArray<AdditionalTraitType>(
		URL_PARAM_ADDITIONAL_TRAIT
	)
	const [optionArray, setOptionArray] = useState<Array<string>>([])
	const optionRef = useRef<HTMLInputElement>(null)

	const onClickAddingOptionButton = () => {
		if (optionRef.current === null) return
		const currentOptionText = optionRef.current.value
		if (!(currentOptionText && currentOptionText.length)) {
			window.alert('옵션명을 적어주세요.')
			return
		}
		if (optionArray.includes(currentOptionText)) {
			window.alert('이미 추가된 옵션입니다.')
			return
		}
		optionRef.current.value = ''
		setOptionArray((prev) => [...prev, currentOptionText])
	}

	const onHandleRemovingTraitOption = (optionIndex: number) => {
		setOptionArray((prev) => {
			const copyPrevArray: Array<string> = [...prev]
			copyPrevArray.splice(optionIndex, 1)
			return copyPrevArray
		})
	}

	const onHandleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const traitName = (e.target.elements.item(0) as HTMLInputElement).value
		// 특성 이름을 적지 않은 경우
		if (!(traitName && traitName.length)) {
			window.alert('추가할 특성의 이름을 적어주세요.')
			return
		}
		// 특성 옵션을 두 개이상 적지 않은 경우
		if (optionArray.length < 2) {
			window.alert('특성의 옵션을 두 개이상 추가해주세요.')
			return
		}
		const personnelArray = getPersonnelArray()
		const traitValues = []
		for (let i = 0; i < personnelArray.length; i++) {
			traitValues.push({
				userId: personnelArray[i].id,
				value: '미지정'
			})
		}
		addAdditionalTrait({
			id: getTimeStamp(),
			name: traitName,
			options: ['미지정', ...optionArray],
			values: traitValues
		})
		onClose()
	}

	if (!isVisible) return
	return (
		<OverlayBase width="45rem" height="32rem" {...{ onClose }}>
			<OverlayHeader overlayName="특성 추가" />
			<S.MainContent>
				<ColumnFlexBox>
					<form onSubmit={onHandleSubmit}>
						<Grid rows={2} columns={2} rowGap="1rem">
							<GridElement row={1} column={1}>
								<CenterFlexBox align="bothAlign">
									<S.TraitKeyText>특성 이름</S.TraitKeyText>
								</CenterFlexBox>
							</GridElement>
							<GridElement row={1} column={2}>
								<CenterFlexBox align="bothAlign">
									<Input width="100%" />
								</CenterFlexBox>
							</GridElement>
							<GridElement row={2} column={1}>
								<CenterFlexBox align="bothAlign">
									<S.TraitKeyText>옵션 설정</S.TraitKeyText>
								</CenterFlexBox>
							</GridElement>
							<GridElement row={2} column={2}>
								<S.InputWrapper>
									<S.OptionList>
										{optionArray.map((option, optionIndex) => (
											<TaggingTrait
												key={optionIndex}
												onClickCancel={() => onHandleRemovingTraitOption(optionIndex)}
											>
												{option}
											</TaggingTrait>
										))}
									</S.OptionList>
									<CenterFlexBox align="bothAlign" gap="0.2rem">
										<Input width="100%" ref={optionRef} />
										<IconButton
											type="button"
											iconData={faUpload}
											onClick={onClickAddingOptionButton}
										/>
									</CenterFlexBox>
								</S.InputWrapper>
							</GridElement>
						</Grid>
						<Spacer y={0.5} />
						<ButtonWrapper>
							<Button type="submit">완료</Button>
						</ButtonWrapper>
					</form>
				</ColumnFlexBox>
			</S.MainContent>
		</OverlayBase>
	)
}

export default AddingTrait

const MainContent = styled.div`
	${FLEX_CENTER}
	width: 100%;
	height: 75%;
`

const TraitKeyText = styled.p`
	${FLEX_CENTER}

	width: 100%;
	height: 100%;

	text-align: center;
	font-size: ${FONT_SIZE.bg};
`

const ButtonWrapper = styled.div`
	${FLEX_END}
	width: 100%;
	height: fit-content;
`

const InputWrapper = styled.div`
	position: relative;

	${FLEX_CENTER}

	width: 100%;
	height: 100%;
`

const OptionList = styled.div`
	position: absolute;
	top: -1.4rem;

	${FLEX_START}
	gap: 0.5rem;

	width: 100%;
	height: fit-content;
	overflow-x: scroll;
`

const S = {
	MainContent,
	TraitKeyText,
	ButtonWrapper,
	InputWrapper,
	OptionList
}
