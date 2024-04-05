import { Button, DropBox, Input } from '@/components'
import {
	ESSENTIAL_TRAIT_CREATION_TIME_INIT,
	ESSENTIAL_TRAIT_NAME_INIT,
	ESSENTIAL_TRAIT_PARTICIPATION_NUM_INIT,
	URL_PARAM_ADDITIONAL_TRAIT,
	URL_PARAM_MEMBER
} from '@/constants'
import { useCryptoQuery, useDialog } from '@/hooks'
import type { MemberType, TraitTableType, TraitType } from '@/types'
import { getTimeStamp } from '@/utils'
import type { ChangeEvent } from 'react'
import * as S from './adding-member.style'
import { LabelAndNodeRowPair } from './components'

const AddingMember = () => {
	const { onAlert, onClose } = useDialog()
	const { getArray, setMultiQueryData } = useCryptoQuery()

	/** 회원 배열 */
	const memberArray = getArray<MemberType>(URL_PARAM_MEMBER)
	/** 추가 특성 베열 */
	const additionalTraitArray = getArray<TraitType>(URL_PARAM_ADDITIONAL_TRAIT)
	/** 추가 특성의 갯수 */
	const numAdditionalTraitArray = additionalTraitArray.length

	const onHandleComplete = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const memberName = (e.target.elements.item(0) as HTMLInputElement).value
		if (!!!memberName) {
			onAlert('새로운 회원의 이름을 작성해주세요.')
			return
		}

		const nameTrait: TraitType = {
			...ESSENTIAL_TRAIT_NAME_INIT,
			value: memberName
		}
		const participationNumTrait: TraitType = {
			...ESSENTIAL_TRAIT_PARTICIPATION_NUM_INIT,
			value: 0
		}
		const creationTimeTrait: TraitType = {
			...ESSENTIAL_TRAIT_CREATION_TIME_INIT,
			value: Date.now()
		}
		const newEssentialTraitArray: TraitTableType = [
			nameTrait,
			participationNumTrait,
			creationTimeTrait
		]
		const newAdditionalTraitArray: TraitTableType = additionalTraitArray.map(
			(additionalTrait, idx) => {
				const additionalTraitValue = (e.target.elements.item(idx + 1) as HTMLSelectElement).value
				const additionalTraitValueIdx = additionalTrait.options.findIndex(
					(option) => option === additionalTraitValue
				)
				return {
					...additionalTrait,
					value: additionalTraitValue,
					valueIdx: additionalTraitValueIdx
				}
			}
		)
		const newMember: MemberType = {
			id: getTimeStamp(),
			essentialTraits: newEssentialTraitArray,
			additionalTraits: newAdditionalTraitArray
		}
		const updatedMemberArray = [...memberArray, newMember]
		setMultiQueryData([URL_PARAM_MEMBER], [updatedMemberArray])
		onClose()
	}

	return (
		<S.ContentForm onSubmit={onHandleComplete}>
			<S.ScrollWrapper>
				<S.ScrollList $isAdditionalTrait={!!numAdditionalTraitArray}>
					<LabelAndNodeRowPair label="이름">
						<Input bgColor="transparent" placeholder="입력해주세요." width="100%" />
					</LabelAndNodeRowPair>
					{additionalTraitArray.map((additionalTrait, idx) => (
						<LabelAndNodeRowPair label={additionalTrait.label} key={idx}>
							<DropBox options={additionalTrait.options} width="100%" bgColor="transparent" />
						</LabelAndNodeRowPair>
					))}
				</S.ScrollList>
			</S.ScrollWrapper>
			<S.ButtonWrapper>
				<Button type="submit">추가하기</Button>
			</S.ButtonWrapper>
		</S.ContentForm>
	)
}

export default AddingMember
