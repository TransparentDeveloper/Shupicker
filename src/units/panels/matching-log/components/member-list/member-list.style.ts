import {
	ALIGN_CENTER,
	BOX_SHADOW_CSS,
	GIANTS_INLINE,
	JUSTIFY_START,
	TEXT_SHADOW_CSS
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Container = styled.div`
	${ALIGN_CENTER}
	${JUSTIFY_START}
  flex-wrap: wrap;
	gap: 1rem;
	width: 100%;
	height: 100%;
	border-radius: ${BORDER_RADIUS.md};
	padding: 0.5rem;
`
export const MemberName = styled.div`
	${GIANTS_INLINE}
	${BOX_SHADOW_CSS}
  ${TEXT_SHADOW_CSS}
  
  display: inline-block;
	white-space: nowrap;
	width: fit-content;
	height: fit-content;
	font-size: ${FONT_SIZE.sm};
	border-radius: ${BORDER_RADIUS.sm};
	background-color: ${COLOR.grayScale[500]};
	color: ${COLOR.grayScale[1500]};
	padding: 0.5rem;
`
