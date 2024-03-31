import { Button, DropBox, Input } from '@/components'
import { URL_PARAM_ADDITIONAL_TRAIT, URL_PARAM_MEMBER } from '@/constants'
import { useDialog, useManageUrlArray } from '@/hooks'
import type { AdditionalTraitType, MemberType, OverlayCommonProps } from '@/types'
import { arrayEncoder, getTimeStamp } from '@/utils'
import type { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import * as S from './adding-member.style'
import { LabelAndNodeRowPair } from './components'

const AddingMember = ({ onClose }: OverlayCommonProps) => {
	const { getArray: getMemberArray } = useManageUrlArray<MemberType>(URL_PARAM_MEMBER)
	const { getArray: getAdditionalTraitArray } = useManageUrlArray<AdditionalTraitType>(
		URL_PARAM_ADDITIONAL_TRAIT
	)
	const { onAlert } = useDialog()
	const [param, setParams] = useSearchParams()

	const memberArray = getMemberArray()
	const additionalTraitArray = getAdditionalTraitArray()
	/** 추가 특성의 갯수 */
	const isAdditionalTrait = additionalTraitArray.length

	const onHandleComplete = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		const userName = (e.target.elements.item(0) as HTMLInputElement).value

		if (!!!userName) {
			onAlert('새로운 멤버의 이름을 작성해주세요.')
			return
		}

		// 참가자 정보 추가
		const userId = getTimeStamp()
		memberArray.push({
			id: userId,
			name: userName,
			joinedAt: Date.now(),
			joinCount: 0
		})
		const encodedMemberArray = arrayEncoder<MemberType>(memberArray)
		param.set(URL_PARAM_MEMBER, encodedMemberArray)

		// 추가 특성 정보 갱신
		for (let i = 0; i < isAdditionalTrait; i++) {
			const traitValue = (e.target.elements.item(i + 1) as HTMLSelectElement).value
			additionalTraitArray[i].values.push({ userId, value: traitValue })
		}
		const encodedAdditionalTraitArray = arrayEncoder<AdditionalTraitType>(additionalTraitArray)
		param.set(URL_PARAM_ADDITIONAL_TRAIT, encodedAdditionalTraitArray)

		setParams(param)
		onClose()
	}

	return (
		<S.ContentForm onSubmit={onHandleComplete}>
			<S.ScrollWrapper>
				<S.ScrollList $isAdditionalTrait={!!isAdditionalTrait}>
					<LabelAndNodeRowPair label="이름">
						<Input bgColor="transparent" placeholder="입력해주세요." width="100%" />
					</LabelAndNodeRowPair>
					{additionalTraitArray.map((additionalTrait, idx) => (
						<LabelAndNodeRowPair label={additionalTrait.name} key={idx}>
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
