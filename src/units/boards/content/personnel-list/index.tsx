import {
	OVERLAY_ADDING_PERSONNEL,
	OVERLAY_ADDING_TRAIT,
	URL_PARAM_ADDITIONAL_TRAIT,
	URL_PARAM_PERSONNEL
} from '@/constants'
import { useManageUrlArray } from '@/hooks'
import { useOpenOverlay } from '@/hooks/use-open-overlay'
import { AdditionalTraitType, PersonnelType } from '@/types'
import { AddingPersonnel, AddingTrait } from '@/units'
import { BoardBase, BoardHeader } from '@/units/boards'
import { getTimeFormatHHMM } from '@/utils'
import { faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'
import * as S from './personnel-list.style'

const PersonnelList = () => {
	const { isOpen: isOpenAddingPersonnel, onOpen: onOpenAddingPersonnel } =
		useOpenOverlay(OVERLAY_ADDING_PERSONNEL)
	const { isOpen: isOpenAddingTrait, onOpen: onOpenAddingTrait } =
		useOpenOverlay(OVERLAY_ADDING_TRAIT)
	const { getArray: getPersonnelArray } = useManageUrlArray<PersonnelType>(URL_PARAM_PERSONNEL)
	const { getArray: getAdditionalTraitArray } = useManageUrlArray<AdditionalTraitType>(
		URL_PARAM_ADDITIONAL_TRAIT
	)

	const NoAdditionalTraitNoticeComponent = useCallback(() => {
		return (
			<S.NoticeWrapper>
				<S.NoticeText>추가 특성이 없습니다. 😎</S.NoticeText>
			</S.NoticeWrapper>
		)
	}, [getAdditionalTraitArray()])

	return (
		<>
			{isOpenAddingPersonnel && <AddingPersonnel />}
			{isOpenAddingTrait && <AddingTrait />}
			<BoardBase>
				<BoardHeader
					sectionName="📌 인명부"
					iconButtonDataArray={[
						{
							iconData: faEdit,
							onClick: onOpenAddingTrait
						},
						{
							iconData: faUserPlus,
							onClick: onOpenAddingPersonnel
						}
					]}
				/>
				<S.InfoContainer>
					<S.EssentialInfoBox>
						<S.EssentialTraitText>이름</S.EssentialTraitText>
						{getPersonnelArray()?.map((personnel, idx) => (
							<S.ValueText key={idx}>{personnel.name}</S.ValueText>
						))}
					</S.EssentialInfoBox>

					<S.EssentialInfoBox>
						<S.EssentialTraitText>총 참여횟수</S.EssentialTraitText>
						{getPersonnelArray()?.map((personnel, idx) => (
							<S.ValueText key={idx}>{personnel.joinCount} 회</S.ValueText>
						))}
					</S.EssentialInfoBox>

					<S.AdditionalInfoListWrapper>
						{!getAdditionalTraitArray().length ? (
							<NoAdditionalTraitNoticeComponent />
						) : (
							<S.AdditionalInfoList>
								{getAdditionalTraitArray().map((trait, index) => (
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
						{getPersonnelArray()?.map((personnel, idx) => (
							<S.ValueText key={idx}>{getTimeFormatHHMM(personnel.joinedAt)}</S.ValueText>
						))}
					</S.EssentialInfoBox>
				</S.InfoContainer>
			</BoardBase>
		</>
	)
}
export default PersonnelList
