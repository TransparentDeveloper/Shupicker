import { ColumnFlexBox, Grid, GridElement, HorizontalGaugeGraph } from '@/components'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './selectable-card.style'
import type { SelectableCardProps } from './selectable-card.type'

export const SelectableCard = ({
	isSelected = false,
	memberName,
	sortedItemLabel,
	currentSortedItemValue,
	maxSortedItemValue,
	currentJoinCount,
	maxJoinCount,
	onClickCard
}: SelectableCardProps) => {
	return (
		<S.Card
			bgColor={isSelected ? COLOR.system.confirm : COLOR.grayScale[300]}
			width="100%"
			height="fit-content"
			onClick={onClickCard}
		>
			<Grid columns={9}>
				<GridElement column={1} columnSpan={2}>
					<S.NameText>{memberName}</S.NameText>
				</GridElement>
				<GridElement column={3} columnSpan={7}>
					<ColumnFlexBox gap="1rem">
						<ColumnFlexBox gap="0.5rem">
							<S.GaugeTitle>{sortedItemLabel}</S.GaugeTitle>
							<HorizontalGaugeGraph
								currentValue={currentSortedItemValue}
								totalValue={maxSortedItemValue}
								gaugeColor={COLOR.brand.sub.light}
							/>
						</ColumnFlexBox>
						<ColumnFlexBox gap="0.5rem">
							<S.GaugeTitle>현재까지 참여횟수</S.GaugeTitle>
							<HorizontalGaugeGraph currentValue={currentJoinCount} totalValue={maxJoinCount} />
						</ColumnFlexBox>
					</ColumnFlexBox>
				</GridElement>
			</Grid>
		</S.Card>
	)
}
