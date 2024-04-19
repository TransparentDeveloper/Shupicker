import { ALIGN_CENTER, GIANTS_INLINE } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: visible;
	${ALIGN_CENTER}
`
export const Sequence = styled.h1`
	${GIANTS_INLINE}
	color: ${COLOR.grayScale[1500]};
	opacity: 0.2;
	text-align: start;
	transform: translate(30%, 3%) scale(170%);
`
