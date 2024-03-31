import { Button, Input } from '@/components'
import { URL_PARAM_ADDITIONAL_TRAIT, URL_PARAM_MEMBER } from '@/constants'
import { useDialog, useManageUrlArray } from '@/hooks'
import {
	ALIGN_CENTER,
	DIRECTION_COLUMN,
	FLEX_CENTER,
	FLEX_START
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import type { AdditionalTraitType, MemberType, OverlayCommonProps } from '@/types'
import { getTimeStamp } from '@/utils'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { LabeledNode, RecordedInput } from './components'

const AddingTrait = ({ onClose }: OverlayCommonProps) => {
	const { getArray: getMemberArray } = useManageUrlArray<MemberType>(URL_PARAM_MEMBER)
	const { addElementOne: addAdditionalTrait } = useManageUrlArray<AdditionalTraitType>(
		URL_PARAM_ADDITIONAL_TRAIT
	)
	const { onAlert } = useDialog()
	const [optionArray, setOptionArray] = useState<Array<string>>(['미지정'])

	const memberArray = getMemberArray()

	const onAddTrait = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newTrait = (e.target.elements.item(0) as HTMLInputElement).value
		// 특성 이름이 없는 경우
		if (!!!newTrait.length) {
			onAlert('추가할 특성의 이름을 적어주세요.')
			return
		}
		// 특성 옵션을 두 개이상 적지 않은 경우
		if (optionArray.length < 3) {
			onAlert('특성의 옵션을 3 개이상 추가해주세요.')
			return
		}
		const traitValues = []
		for (let i = 0; i < memberArray.length; i++) {
			traitValues.push({
				userId: memberArray[i].id,
				value: '미지정'
			})
		}
		addAdditionalTrait({
			id: getTimeStamp(),
			name: newTrait,
			options: [...optionArray],
			values: traitValues
		})
		onClose()
	}

	return (
		<S.ContentForm onSubmit={onAddTrait}>
			<LabeledNode label="특성 이름">
				<Input width="100%" />
			</LabeledNode>
			<LabeledNode label="옵션 설정">
				<RecordedInput recordArray={optionArray} setRecordArray={setOptionArray} />
			</LabeledNode>
			<S.ButtonWrapper>
				<Button type="submit">추가하기</Button>
			</S.ButtonWrapper>
		</S.ContentForm>
	)
}

export default AddingTrait

const ContentForm = styled.form`
	${DIRECTION_COLUMN}
	${ALIGN_CENTER}
	justify-content: space-around;

	gap: 1rem;
	width: 100%;
	height: 100%;
`

const ButtonWrapper = styled.div`
	${FLEX_CENTER}
	position: absolute;
	gap: 1rem;
	width: 100%;
	height: 5rem;
	bottom: -5.2rem;
	padding: 0 2rem;
	border-bottom-right-radius: ${BORDER_RADIUS.sm};
	border-bottom-left-radius: ${BORDER_RADIUS.sm};
	background-color: ${COLOR.grayScale[400]};
	right: 0;
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
	ContentForm,
	ButtonWrapper,
	InputWrapper,
	OptionList
}
