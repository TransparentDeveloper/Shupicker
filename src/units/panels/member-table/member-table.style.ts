import { BOX_SHADOW_CSS, FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const GridTable = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 2fr 1fr;
	overflow-x: hidden;
	word-break: keep-all;
`
export const NoticeWrapper = styled.div`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
	${BOX_SHADOW_CSS}
`
export const NoticeText = styled.h4`
	text-align: center;
	${TEXT_SHADOW_CSS}
	padding: 0.5rem;
	background-color: ${COLOR.system.alert};
	border-radius: ${BORDER_RADIUS.sm};
`
