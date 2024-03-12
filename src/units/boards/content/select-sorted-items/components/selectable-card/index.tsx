import { Box, ColumnFlexBox, Grid, GridElement, HorizontalGaugeGraph } from '@/components'
import { FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import type { PersonnelType } from '@/types'
import { getMinuteDifference } from '@/utils'
import styled from 'styled-components'

type SelectableCardProps = {
	isSelected: boolean
	personnel: PersonnelType
	onClickCard: VoidFunction
}

export const SelectableCard = ({ isSelected, personnel, onClickCard }: SelectableCardProps) => {
	// 10 분 당 평균 참여횟수 구하기
	const timeDiffFromCreation = getMinuteDifference(Date.now(), personnel.joinedAt)
	let joinCountPer10Min = personnel.joinCount
	if (timeDiffFromCreation > 10) {
		// 10분 단위
		const numOf10minIncrements = Math.floor(timeDiffFromCreation / 10)
		joinCountPer10Min = parseFloat((personnel.joinCount / numOf10minIncrements).toFixed(2))
	}
	return (
		<Box
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
							<span>10분 당, 참여횟수</span>
							<HorizontalGaugeGraph
								currentValue={joinCountPer10Min}
								totalValue={10}
								gaugeColor={COLOR.brand.sub.light}
							/>
						</ColumnFlexBox>
						<ColumnFlexBox gap="0.5rem">
							<span>현재까지 참여횟수</span>
							<HorizontalGaugeGraph currentValue={personnel.joinCount} totalValue={200} />
						</ColumnFlexBox>
					</ColumnFlexBox>
				</GridElement>
			</Grid>
		</Box>
	)
}

const NameText = styled.h2`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
	color: ${COLOR.grayScale[1500]};
	text-align: center;
	${TEXT_SHADOW_CSS}
`
const S = {
	NameText
}
