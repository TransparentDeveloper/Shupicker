import {
	ALIGN_CENTER,
	BORDER_INSET,
	BORDER_SOLID,
	BOX_SHADOW_CSS,
	DIRECTION_COLUMN,
	FLEX_CENTER,
	FLEX_START,
	TEXT_SHADOW_CSS
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const InfoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 2fr 1fr;
	overflow-y: scroll;
	overflow-x: hidden;
	word-break: keep-all;
`
export const EssentialInfoBox = styled.div`
	${ALIGN_CENTER}
	${DIRECTION_COLUMN}
	width: 100%;
	height: 100%;
	${BORDER_SOLID}
	border-radius: ${BORDER_RADIUS.sm} ${BORDER_RADIUS.sm} ${BORDER_RADIUS.ti} ${BORDER_RADIUS.ti};
	background-color: ${COLOR.grayScale[300]};
`
export const EssentialTraitText = styled.h4`
	${FLEX_CENTER}
	text-align: center;
	padding: 1rem;
	width: 100%;
	height: 5rem;
	border-bottom: 0.05rem solid ${COLOR.grayScale[700]};
`
export const AdditionalInfoListWrapper = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: ${COLOR.grayScale[400]};
	overflow-y: hidden;
	overflow-x: scroll;
`
export const AdditionalInfoList = styled.ul`
	position: absolute;
	width: fit-content;
	height: 100%;
	${FLEX_START}
`
export const AdditionalInfoBox = styled.div`
	${ALIGN_CENTER}
	${DIRECTION_COLUMN}
	width: 8.5rem;
	height: 100%;
	${BORDER_INSET}
	border-bottom: none;
`
export const AdditionalTraitText = styled.p`
	${FLEX_CENTER}
	text-align: center;
	padding: 1rem;
	width: 100%;
	height: 5rem;
	${BORDER_INSET}
`
export const ValueText = styled.p`
	${FLEX_CENTER}
	text-align: center;
	padding: 1rem;
	width: 100%;
	height: 3.5rem;
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
