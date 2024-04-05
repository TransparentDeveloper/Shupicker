import { Button, Input } from '@/components'
import { URL_PARAM_ADDITIONAL_TRAIT, URL_PARAM_MEMBER } from '@/constants'
import { useCryptoQuery, useDialog } from '@/hooks'
import type { MemberType, TraitType } from '@/types'
import { getTimeStamp } from '@/utils'
import { ChangeEvent, useState } from 'react'
import * as S from './adding-trait.style'
import { LabeledNode, RecordedInput } from './components'

const AddingTrait = () => {
	const { onAlert, onClose } = useDialog()
	const { getArray, setMultiQueryData } = useCryptoQuery()
	const [optionArray, setOptionArray] = useState<Array<string>>(['미지정'])

	const memberArray: Array<MemberType> = getArray(URL_PARAM_MEMBER)
	const traitArray: Array<TraitType> = getArray(URL_PARAM_ADDITIONAL_TRAIT)

	const onAddTrait = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const traitName = (e.target.elements.item(0) as HTMLInputElement).value
		// 특성 이름이 없는 경우
		if (!!!traitName) {
			onAlert('추가할 특성의 이름을 적어주세요.')
			return
		}
		// 특성 옵션을 두 개이상 적지 않은 경우
		if (optionArray.length < 3) {
			onAlert('특성의 옵션을 3 개이상 추가해주세요.')
			return
		}

		const newTrait: TraitType = {
			id: getTimeStamp(),
			label: traitName,
			hasOption: true,
			options: optionArray,
			valueIdx: 0,
			value: optionArray[0]
		}

		const updatedTraitArray = [...traitArray, newTrait]
		const updatedMemberArray = memberArray.map((member) => {
			member.additionalTraits.push(newTrait)
			return member
		})

		setMultiQueryData(
			[URL_PARAM_ADDITIONAL_TRAIT, URL_PARAM_MEMBER],
			[updatedTraitArray, updatedMemberArray]
		)
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
