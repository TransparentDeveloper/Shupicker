import {
	BORDER_SOLID,
	FLEX_CENTER,
	FLEX_START,
	TEXT_SHADOW_CSS
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './horizontal-gauge.type'

export const GraphWrapper = styled.div`
	${FLEX_START}
	${BORDER_SOLID};
	position: relative;
	width: 100%;
	height: 1.4rem;
	background-color: ${COLOR.grayScale[900]};
	border-radius: ${BORDER_RADIUS.sm};
	overflow: hidden;
`
export const Gauge = styled.div<T.$Gauge>`
	width: ${({ $width }) => $width};
	height: 100%;
	background-color: ${({ $gaugeColor }) => $gaugeColor};
	border-radius: ${BORDER_RADIUS.sm};
`
export const FractionText = styled.p`
	${FLEX_CENTER}
	position: absolute;
	width: 100%;
	height: 100%;
	color: ${COLOR.grayScale[1500]};
	font-size: ${FONT_SIZE.sm};
	text-shadow: -0.01rem -0.01rem 0.1rem ${COLOR.grayScale[0]};
	text-align: center;
`
export const Label = styled.span`
	${TEXT_SHADOW_CSS}
`
