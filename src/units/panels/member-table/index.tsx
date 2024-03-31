import { PanelBase, PanelHeader } from '@/components'
import PanelMain from '@/components/panel/panel-main'
import { URL_PARAM_ADDITIONAL_TRAIT, URL_PARAM_MEMBER } from '@/constants'
import { useDialog, useManageUrlArray } from '@/hooks'
import type { AdditionalTraitType, MemberType, OptionalSizeProps } from '@/types'
import { AddingMember, AddingTrait } from '@/units'
import { getTimeFormatHHMM, sortByMemberId } from '@/utils'
import { faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'
import * as S from './member-table.style'

const MemberTable = ({ width = '100%', height = '100%' }: OptionalSizeProps) => {
	const { getArray: getMemberArray } = useManageUrlArray<MemberType>(URL_PARAM_MEMBER)
	const { getArray: getAdditionalTraitArray } = useManageUrlArray<AdditionalTraitType>(
		URL_PARAM_ADDITIONAL_TRAIT
	)
	const { onOverlayWindow, onClose } = useDialog()

	const onOpenAddingTrait = () => {
		onOverlayWindow({
			title: '특성 추가',
			dialogContent: <AddingTrait />
		})
	}
	const onOpenAddingMember = () => {
		onOverlayWindow({
			title: '인원 추가',
			dialogContent: <AddingMember {...{ onClose }} />
		})
	}

	/** 멤버 배열 */
	const memberArray = getMemberArray()
	/** 추가 특성 배열 */
	const additionalTraitArray = getAdditionalTraitArray()
	/** 아이디로 정렬된 멤버 배열 */
	const sortedByIdMemberArray = sortByMemberId(memberArray)

	const NoAdditionalTraitNoticeComponent = useCallback(() => {
		return (
			<S.NoticeWrapper>
				<S.NoticeText>추가 특성이 없습니다. 😎</S.NoticeText>
			</S.NoticeWrapper>
		)
	}, [additionalTraitArray])

	return (
		<>
			<PanelBase {...{ width, height }}>
				<PanelHeader
					sectionName="📌 인명부"
					iconButtonDataArray={[
						{
							iconData: faEdit,
							onClick: onOpenAddingTrait
						},
						{
							iconData: faUserPlus,
							onClick: onOpenAddingMember
						}
					]}
				/>
				<PanelMain>
					<S.InfoContainer>
						<S.EssentialInfoBox>
							<S.EssentialTraitText>이름</S.EssentialTraitText>
							{sortedByIdMemberArray?.map((member, idx) => (
								<S.ValueText key={idx}>{member.name}</S.ValueText>
							))}
						</S.EssentialInfoBox>

						<S.EssentialInfoBox>
							<S.EssentialTraitText>총 참여횟수</S.EssentialTraitText>
							{sortedByIdMemberArray?.map((member, idx) => (
								<S.ValueText key={idx}>{member.joinCount} 회</S.ValueText>
							))}
						</S.EssentialInfoBox>

						<S.AdditionalInfoListWrapper>
							{!additionalTraitArray.length ? (
								<NoAdditionalTraitNoticeComponent />
							) : (
								<S.AdditionalInfoList>
									{additionalTraitArray.map((trait, index) => (
										<S.AdditionalInfoBox key={index}>
											<S.AdditionalTraitText>{trait.name}</S.AdditionalTraitText>
											{trait.values.map(({ userId, value }) => (
												<S.ValueText key={userId}>{value}</S.ValueText>
											))}
										</S.AdditionalInfoBox>
									))}
								</S.AdditionalInfoList>
							)}
						</S.AdditionalInfoListWrapper>

						<S.EssentialInfoBox>
							<S.EssentialTraitText>생성시각</S.EssentialTraitText>
							{sortedByIdMemberArray?.map((member, idx) => (
								<S.ValueText key={idx}>{getTimeFormatHHMM(member.joinedAt)}</S.ValueText>
							))}
						</S.EssentialInfoBox>
					</S.InfoContainer>
				</PanelMain>
			</PanelBase>
		</>
	)
}
export default MemberTable
