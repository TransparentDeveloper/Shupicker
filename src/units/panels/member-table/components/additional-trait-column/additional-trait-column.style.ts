import {
	ALIGN_CENTER,
	BORDER_INSET,
	DIRECTION_COLUMN,
	FLEX_CENTER
} from '@/libs/styled-components/css-utils'
import styled from 'styled-components'

export const ColumnWrapper = styled.div`
	${ALIGN_CENTER}
	${DIRECTION_COLUMN}
	${BORDER_INSET}
  width: 10rem;
	height: 100%;
	border-bottom: none;
`
export const Label = styled.p`
	${FLEX_CENTER}
	text-align: center;
	padding: 1rem;
	width: 100%;
	height: 5rem;
`
export const AdditionalTraitLabel = styled(Label)`
	${BORDER_INSET}
`
