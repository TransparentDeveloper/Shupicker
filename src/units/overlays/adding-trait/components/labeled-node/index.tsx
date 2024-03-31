import { Grid, GridElement } from '@/components'
import { FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

type LabeledNodeProps = PropsWithChildren & {
	label: string
}

const LabeledNode = ({ label, children }: LabeledNodeProps) => {
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

const Wrapper = styled.div`
	width: 100%;
	height: 6rem;
`

const LabelText = styled.div`
	${FLEX_CENTER}
	${TEXT_SHADOW_CSS}
	text-align: center;
	width: 100%;
	height: 100%;
	font-size: ${FONT_SIZE.bg};
`

const S = {
	Wrapper,
	LabelText
}
