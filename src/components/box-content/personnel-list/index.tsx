import { AddingPersonnel, CenterFlexBox, ColumnFlexBox } from '@/components'
import { IsOpenOverlayAtom } from '@/libs/recoil'
import {
	ALIGN_CENTER,
	DIRECTION_COLUMN,
	FLEX_CENTER,
	FLEX_START
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

const PersonnelList = () => {
	const [isOpenOverlay, setIsOpenOverlay] = useRecoilState(IsOpenOverlayAtom)
	const onClickAddButton = () => {
		setIsOpenOverlay(true)
	}

	return (
		<>
			{isOpenOverlay && <AddingPersonnel />}
			<CenterFlexBox>
				<ColumnFlexBox gap="1vh">
					<S.InfoContainer>
						<S.EssentialInfoBox>
							<S.EssentialTraitText>참여자</S.EssentialTraitText>
							<S.ValueText>김성룡</S.ValueText>
							<S.ValueText>이순신</S.ValueText>
							<S.ValueText>권율</S.ValueText>
							<S.ValueText>아이유</S.ValueText>
						</S.EssentialInfoBox>

						<S.EssentialInfoBox>
							<S.EssentialTraitText>생성시각</S.EssentialTraitText>
							<S.ValueText>18:00</S.ValueText>
							<S.ValueText>18:30</S.ValueText>
							<S.ValueText>19:20</S.ValueText>
							<S.ValueText>20:20</S.ValueText>
						</S.EssentialInfoBox>

						<S.AdditionalInfoListWrapper>
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
							<S.EssentialTraitText>총 참여횟수</S.EssentialTraitText>
							<S.ValueText>1 회</S.ValueText>
							<S.ValueText>2 회</S.ValueText>
							<S.ValueText>5 회</S.ValueText>
							<S.ValueText>2 회</S.ValueText>
						</S.EssentialInfoBox>
					</S.InfoContainer>
					<S.AddButton onClick={onClickAddButton}>+</S.AddButton>
				</ColumnFlexBox>
			</CenterFlexBox>
		</>
	)
}

export default PersonnelList

const InfoContainer = styled.div`
	width: 100%;
	height: 100%;

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

	border: 0.05rem solid ${COLOR.grayScale[500]};
	border-radius: ${BORDER_RADIUS.sm} ${BORDER_RADIUS.sm} ${BORDER_RADIUS.ti} ${BORDER_RADIUS.ti};
	background-color: ${COLOR.grayScale[300]};
`
const EssentialTraitText = styled.h4`
	${FLEX_CENTER}

	text-align: center;
	padding: 1rem;

	width: 100%;
	height: 5rem;

	border-bottom: 1px inset ${COLOR.grayScale[600]};
`

const AdditionalInfoListWrapper = styled.section`
	position: relative;

	width: 100%;
	height: 100%;

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

	border: 0.05rem inset ${COLOR.grayScale[700]};
	border-bottom: none;
`
const AdditionalTraitText = styled.p`
	${FLEX_CENTER}
	text-align: center;
	padding: 1rem;
	width: 100%;
	height: 5rem;
	border-bottom: 0.5px solid ${COLOR.grayScale[600]};
`
const ValueText = styled.p`
	${FLEX_CENTER}
	text-align: center;

	padding: 1rem;

	width: 100%;
	height: 3.5rem;
`
const AddButton = styled.button`
	height: 3.5rem;

	border-radius: ${BORDER_RADIUS.sm};
	border: 0.05rem solid ${COLOR.grayScale[500]};
	background-color: ${COLOR.grayScale[1400]};
	color: ${COLOR.brand.weight};
	transition: background-color 0.3s;
	cursor: pointer;
	&:hover {
		background-color: ${COLOR.brand.light};
		color: ${COLOR.grayScale[1400]};
	}
`
const S = {
	AddButton,
	EssentialInfoBox,
	InfoContainer,
	EssentialTraitText,
	ValueText,
	AdditionalInfoListWrapper,
	AdditionalInfoBox,
	AdditionalTraitText
}
