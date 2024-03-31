import { Grid, GridElement } from '@/components'
import * as S from './labeled-node.style'
import type * as T from './labeled-node.type'
const LabeledNode = ({ label, children }: T.LabeledNodeProps) => {
	return (
		<S.Wrapper>
			<Grid columns={2}>
				<GridElement column={1}>
					<S.LabelText>{label}</S.LabelText>
				</GridElement>
				<GridElement column={2}>
					<S.LabelText>{children}</S.LabelText>
				</GridElement>
			</Grid>
		</S.Wrapper>
	)
}

export default LabeledNode
