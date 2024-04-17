import { Grid, GridElement } from '@/components'
import { ESSENTIAL_TRAIT_NAME_ID } from '@/constants'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import { findEssentialTraitById } from '@/utils'
import { GaugeSection } from '../gauge-section'
import * as S from './selectable-card.style'
import type { SelectableCardProps } from './selectable-card.type'

export const SelectableCard = ({
	isSelected = false,
	member,
	onClickCard
}: SelectableCardProps) => {
	const memberId = member.id
	const memberName = findEssentialTraitById(member, ESSENTIAL_TRAIT_NAME_ID) as string

	return (
		<S.Card
			bgColor={isSelected ? COLOR.system.confirm : COLOR.grayScale[300]}
			width="100%"
			height="fit-content"
			onClick={() => onClickCard(memberId)}
		>
			<Grid columns={9}>
				<GridElement column={1} columnSpan={2}>
					<S.NameText>{memberName}</S.NameText>
				</GridElement>
				<GridElement column={3} columnSpan={7}>
					<GaugeSection member={member} />
				</GridElement>
			</Grid>
		</S.Card>
	)
}
