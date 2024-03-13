import { Box, ColumnFlexBox, Grid, GridElement, HorizontalGaugeGraph } from '@/components'
import { FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import type { PersonnelType } from '@/types'
import { getMinuteDifference } from '@/utils'
import styled from 'styled-components'

type SelectableCardProps = {
	isSelected?: boolean
	personnel: PersonnelType
	onClickCard: VoidFunction
}

export const SelectableCard = ({
	isSelected = false,
	personnel,
	onClickCard
}: SelectableCardProps) => {
	// 10 분 당 평균 참여횟수 구하기
	const timeDiffFromCreation = getMinuteDifference(Date.now(), personnel.joinedAt)
	let joinCountPer10Min = personnel.joinCount
	if (timeDiffFromCreation > 10) {
		joinCountPer10Min = parseFloat(((joinCountPer10Min / timeDiffFromCreation) * 10).toFixed(2))
	}
	return (
		<S.Card
			bgColor={isSelected ? COLOR.system.confirm : COLOR.grayScale[300]}
			width="100%"
			height="fit-content"
			onClick={onClickCard}
		>
			<Grid columns={9}>
				<GridElement column={1} columnSpan={2}>
					<S.NameText>{personnel.name}</S.NameText>
				</GridElement>
				<GridElement column={3} columnSpan={7}>
					<ColumnFlexBox gap="1rem">
						<ColumnFlexBox gap="0.5rem">
							<S.GaugeTitle>10분 당, 참여횟수</S.GaugeTitle>
							<HorizontalGaugeGraph
								currentValue={joinCountPer10Min}
								totalValue={10}
								gaugeColor={COLOR.brand.sub.light}
							/>
						</ColumnFlexBox>
						<ColumnFlexBox gap="0.5rem">
							<S.GaugeTitle>현재까지 참여횟수</S.GaugeTitle>
							<HorizontalGaugeGraph currentValue={personnel.joinCount} totalValue={10} />
						</ColumnFlexBox>
					</ColumnFlexBox>
				</GridElement>
			</Grid>
		</S.Card>
	)
}

const Card = styled(Box)`
	transition: background-color 0.2s;
	cursor: pointer;
`
const NameText = styled.h2`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
	color: ${COLOR.grayScale[1500]};
	text-align: center;
	${TEXT_SHADOW_CSS}
`
const GaugeTitle = styled.span`
	${TEXT_SHADOW_CSS}
`
const S = {
	Card,
	NameText,
	GaugeTitle
}
