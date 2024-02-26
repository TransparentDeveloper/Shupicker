import { BoardBase, BoardHeader } from '@/boards'
import { AddingPersonnel } from '@/components'
import AddingTrait from '@/components/overlay/adding-trait'
import { OVERLAY_ADDING_PERSONNEL, OVERLAY_ADDING_TRAIT, URL_PARAM_PERSONNEL } from '@/constants'
import { useGetDecodedArray } from '@/hooks'
import { useOpenOverlay } from '@/hooks/use-open-overlay'
import {
	ALIGN_CENTER,
	BORDER_INSET,
	BORDER_SOLID,
	DIRECTION_COLUMN,
	FLEX_CENTER,
	FLEX_START
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import { PersonnelType } from '@/types'
import { faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const PersonnelList = () => {
	const { decodedArray: personnelArray } = useGetDecodedArray<PersonnelType>(URL_PARAM_PERSONNEL)
	const { isOpen: isOpenAddingPersonnel, onOpen: onOpenAddingPersonnel } =
		useOpenOverlay(OVERLAY_ADDING_PERSONNEL)
	const { isOpen: isOpenAddingTrait, onOpen: onOpenAddingTrait } =
		useOpenOverlay(OVERLAY_ADDING_TRAIT)

	return (
		<>
			{isOpenAddingPersonnel && <AddingPersonnel width="40vw" height="38vh" />}
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
						{personnelArray?.map((personnel, idx) => (
							<S.ValueText key={idx}>{personnel.name}</S.ValueText>
						))}
					</S.EssentialInfoBox>

					<S.EssentialInfoBox>
						<S.EssentialTraitText>총 참여횟수</S.EssentialTraitText>
						{personnelArray?.map((personnel, idx) => (
							<S.ValueText key={idx}>{personnel.joinCount} 회</S.ValueText>
						))}
					</S.EssentialInfoBox>

					<S.AdditionalInfoListWrapper>
						{}
						<AdditionalInfoList>
							<S.AdditionalInfoBox>
								<S.AdditionalTraitText>성별</S.AdditionalTraitText>
								<S.ValueText>남</S.ValueText>
								<S.ValueText>여</S.ValueText>
								<S.ValueText>남</S.ValueText>
								<S.ValueText>남</S.ValueText>
							</S.AdditionalInfoBox>
							<S.AdditionalInfoBox>
								<S.AdditionalTraitText>총 참여횟수</S.AdditionalTraitText>
								<S.ValueText>1 회</S.ValueText>
								<S.ValueText>2 회</S.ValueText>
								<S.ValueText>5 회</S.ValueText>
								<S.ValueText>2 회</S.ValueText>
							</S.AdditionalInfoBox>
							<S.AdditionalInfoBox>
								<S.AdditionalTraitText>총 참여횟수</S.AdditionalTraitText>
								<S.ValueText>1 회</S.ValueText>
								<S.ValueText>2 회</S.ValueText>
								<S.ValueText>5 회</S.ValueText>
								<S.ValueText>2 회</S.ValueText>
							</S.AdditionalInfoBox>
							<S.AdditionalInfoBox>
								<S.AdditionalTraitText>총 참여횟수</S.AdditionalTraitText>
								<S.ValueText>1 회</S.ValueText>
								<S.ValueText>2 회</S.ValueText>
								<S.ValueText>5 회</S.ValueText>
								<S.ValueText>2 회</S.ValueText>
							</S.AdditionalInfoBox>
						</AdditionalInfoList>
					</S.AdditionalInfoListWrapper>

					<S.EssentialInfoBox>
						<S.EssentialTraitText>생성시각</S.EssentialTraitText>
						{personnelArray?.map((personnel, idx) => (
							<S.ValueText key={idx}>{personnel.joinedAt}</S.ValueText>
						))}
					</S.EssentialInfoBox>
				</S.InfoContainer>
			</BoardBase>
		</>
	)
}

export default PersonnelList

const InfoContainer = styled.div`
	width: 100%;
	height: 34vh;

	display: grid;
	grid-template-columns: 1fr 1fr 2fr 1fr;

	overflow-y: scroll;
	overflow-x: hidden;

	word-break: keep-all;
`

const EssentialInfoBox = styled.div`
	${ALIGN_CENTER}
	${DIRECTION_COLUMN}

	width: 100%;
	height: 100%;

	${BORDER_SOLID}
	border-radius: ${BORDER_RADIUS.sm} ${BORDER_RADIUS.sm} ${BORDER_RADIUS.ti} ${BORDER_RADIUS.ti};
	background-color: ${COLOR.grayScale[300]};
`
const EssentialTraitText = styled.h4`
	${FLEX_CENTER}

	text-align: center;
	padding: 1rem;

	width: 100%;
	height: 5rem;

	border-bottom: 0.05rem solid ${COLOR.grayScale[700]};
`
const AdditionalInfoListWrapper = styled.section`
	position: relative;

	width: 100%;
	height: 100%;

	background-color: ${COLOR.grayScale[400]};

	overflow-y: hidden;
	overflow-x: scroll;
`
const AdditionalInfoList = styled.ul`
	position: absolute;

	width: fit-content;
	height: 100%;

	${FLEX_START}
`
const AdditionalInfoBox = styled.div`
	${ALIGN_CENTER}
	${DIRECTION_COLUMN}

	width: 8.5rem;
	height: 100%;

	${BORDER_INSET}
	border-bottom: none;
`
const AdditionalTraitText = styled.p`
	${FLEX_CENTER}
	text-align: center;
	padding: 1rem;
	width: 100%;
	height: 5rem;
	${BORDER_INSET}
`
const ValueText = styled.p`
	${FLEX_CENTER}
	text-align: center;

	padding: 1rem;

	width: 100%;
	height: 3.5rem;
`
const S = {
	EssentialInfoBox,
	InfoContainer,
	EssentialTraitText,
	ValueText,
	AdditionalInfoListWrapper,
	AdditionalInfoBox,
	AdditionalTraitText
}
