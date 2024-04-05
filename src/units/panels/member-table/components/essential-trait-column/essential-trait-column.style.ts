import {
	ALIGN_CENTER,
	BORDER_SOLID,
	DIRECTION_COLUMN,
	FLEX_CENTER,
	GIANTS_BOLD
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const ColumnWrapper = styled.div`
	${DIRECTION_COLUMN}
	${ALIGN_CENTER}
  ${BORDER_SOLID}
  width: 100%;
	height: 100%;
	border-radius: ${BORDER_RADIUS.sm} ${BORDER_RADIUS.sm} ${BORDER_RADIUS.ti} ${BORDER_RADIUS.ti};
	background-color: ${COLOR.grayScale[300]};
`
export const Label = styled.p`
	${FLEX_CENTER}
	text-align: center;
	padding: 1rem;
	width: 100%;
	height: 5rem;
`
export const TraitLabel = styled(Label)`
	${GIANTS_BOLD}
	border-bottom: 0.05rem solid ${COLOR.grayScale[700]};
`
