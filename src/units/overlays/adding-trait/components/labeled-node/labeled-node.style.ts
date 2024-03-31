import { FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 6rem;
`
export const LabelText = styled.div`
	${FLEX_CENTER}
	${TEXT_SHADOW_CSS}
	text-align: center;
	width: 100%;
	height: 100%;
	font-size: ${FONT_SIZE.bg};
`
