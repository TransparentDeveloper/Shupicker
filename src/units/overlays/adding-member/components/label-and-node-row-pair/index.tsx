import { Grid, GridElement } from '@/components'
import * as S from './label-and-node-row-pair.style'
import type * as T from './label-and-node-row-pair.type'

const LabelAndNodeRowPair = ({ label, children }: T.LabelAndNodeRowPairProps) => {
	return (
		<S.Container>
			<Grid rows={2}>
				<GridElement row={1}>
					<S.LabelWrapper>{label}</S.LabelWrapper>
				</GridElement>
				<GridElement row={2}>
					<S.NodeWrapper>{children}</S.NodeWrapper>
				</GridElement>
			</Grid>
		</S.Container>
	)
}

export default LabelAndNodeRowPair
