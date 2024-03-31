import { FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Container = styled.div`
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
export const LabelWrapper = styled(WrapperBase)`
	background-color: ${COLOR.grayScale[200]};
	border-top-left-radius: ${BORDER_RADIUS.ti};
	border-top-right-radius: ${BORDER_RADIUS.ti};
`
export const NodeWrapper = styled(WrapperBase)`
	background-color: ${COLOR.grayScale[400]};
	border-bottom-left-radius: ${BORDER_RADIUS.ti};
	border-bottom-right-radius: ${BORDER_RADIUS.ti};
`
