import { BOX_SHADOW_CSS, FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const NoticeWrapper = styled.div`
	${FLEX_CENTER}
	${BOX_SHADOW_CSS}
	width: 100%;
	height: 100%;
`
export const NoticeText = styled.h4`
	${TEXT_SHADOW_CSS}
	text-align: center;
	padding: 0.5rem;
	background-color: ${COLOR.system.alert};
	border-radius: ${BORDER_RADIUS.sm};
`
