import {
	Button,
	CenterFlexBox,
	ColumnFlexBox,
	Grid,
	GridElement,
	Input,
	OverlayBase,
	OverlayHeader,
	Spacer
} from '@/components'
import { OVERLAY_ADDING_TRAIT } from '@/constants'
import { useCloseOverlay, useManageShupickerData } from '@/hooks'
import { FLEX_CENTER, FLEX_END, FLEX_START } from '@/libs/styled-components/css-utils'
import { FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { getTimeStamp } from '@/utils'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { TaggingTrait } from './components'

const AddingTrait = () => {
	const { isVisible, onClose } = useCloseOverlay(OVERLAY_ADDING_TRAIT)
	const { getPersonnelArray, addAdditionalTrait } = useManageShupickerData()
	const [traitOptionArray, setTraitOptionArray] = useState<Array<string>>([])
	const traitNameRef = useRef<HTMLInputElement>(null)

	const onHandleAddingTraitOption = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (
			e.key === 'Enter' &&
			e.currentTarget.value &&
			!traitOptionArray.includes(e.currentTarget.value)
		) {
			const newOption = e.currentTarget.value
			e.currentTarget.value = '' // input 초기화
			setTraitOptionArray((prev) => {
				const copyPrevArray: Array<string> = [...prev]
				copyPrevArray.push(newOption)
				return [...new Set(copyPrevArray)]
			})
		}
	}
	const onHandleRemoveTraitOption = (optionIndex: number) => {
		setTraitOptionArray((prev) => {
			const copyPrevArray: Array<string> = [...prev]
			copyPrevArray.splice(optionIndex, 1)
			return copyPrevArray
		})
	}
	const onClickComplete = () => {
		// 특성 이름을 적지 않은 경우
		if (!(traitNameRef.current && traitNameRef.current.value.length)) {
			window.alert('추가할 특성의 이름을 적어주세요.')
			return
		}
		// 특성 옵션을 두 개이상 적지 않은 경우
		if (traitOptionArray.length < 2) {
			window.alert('특성의 옵션을 두 개이상 추가해주세요.')
			return
		}

		const personnelArray = getPersonnelArray()

		const traitId = getTimeStamp()
		const options = ['미지정', ...traitOptionArray]
		const traitValues = []
		for (let i = 0; i < personnelArray.length; i++) {
			traitValues.push({
				userId: personnelArray[i].id,
				value: '미지정'
			})
		}

		addAdditionalTrait({
			id: traitId,
			name: traitNameRef.current!.value,
			options: options,
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
					<Grid rows={2} columns={2} rowGap="1rem">
						<GridElement row={1} column={1}>
							<CenterFlexBox align="bothAlign">
								<S.TraitKeyText>특성 이름</S.TraitKeyText>
							</CenterFlexBox>
						</GridElement>
						<GridElement row={1} column={2}>
							<CenterFlexBox align="bothAlign">
								<Input ref={traitNameRef} />
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
									{traitOptionArray.map((traitOption, optionIndex) => (
										<TaggingTrait
											key={optionIndex}
											onClickCancel={() => onHandleRemoveTraitOption(optionIndex)}
										>
											{traitOption}
										</TaggingTrait>
									))}
								</S.OptionList>
								<Input onKeyUp={onHandleAddingTraitOption} />
							</S.InputWrapper>
						</GridElement>
					</Grid>
					<Spacer y={0.5} />
					<ButtonWrapper>
						<Button onClick={onClickComplete}>완료</Button>
					</ButtonWrapper>
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
	top: -0.6rem;

	${FLEX_START}
	gap: 0.5rem;

	width: 18rem;
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
