import { Grid, GridElement } from '@/components'
import { FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import type { PropsWithChildren } from 'react'
import styled from 'styled-components'

type LabelAndNodeRowPairProps = PropsWithChildren & {
	label: string
}

const LabelAndNodeRowPair = ({ label, children }: LabelAndNodeRowPairProps) => {
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

const Container = styled.div`
	width: 25rem;
	min-width: 25rem;
	height: 100%;
`
const WrapperBase = styled.div`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
	padding: 0.5rem 1rem;
	color: ${COLOR.grayScale[1500]};
`
const LabelWrapper = styled(WrapperBase)`
	background-color: ${COLOR.grayScale[200]};
	border-top-left-radius: ${BORDER_RADIUS.ti};
	border-top-right-radius: ${BORDER_RADIUS.ti};
`
const NodeWrapper = styled(WrapperBase)`
	background-color: ${COLOR.grayScale[400]};
	border-bottom-left-radius: ${BORDER_RADIUS.ti};
	border-bottom-right-radius: ${BORDER_RADIUS.ti};
`

const S = {
	Container,
	LabelWrapper,
	NodeWrapper
}
