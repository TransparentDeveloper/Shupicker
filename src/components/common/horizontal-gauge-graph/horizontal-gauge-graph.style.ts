import { FLEX_CENTER, FLEX_START } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './horizontal-gauge-graph.type'

export const Wrapper = styled.div<T.$WrapperProps>`
	position: relative;

	${FLEX_START}

	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};

	background-color: ${COLOR.grayScale[900]};
	border-radius: ${BORDER_RADIUS.sm};
`

export const Gauge = styled.div<T.$Gauge>`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};

	background-color: ${({ $gaugeColor }) => $gaugeColor};
	border-radius: ${BORDER_RADIUS.sm};
`

export const FractionText = styled.p`
	position: absolute;

	${FLEX_CENTER}

	width: 100%;
	height: 100%;

	color: ${COLOR.grayScale[1500]};

	font-size: ${FONT_SIZE.sm};
	text-shadow: -0.01rem -0.01rem 0.1rem ${COLOR.grayScale[0]};
	text-align: center;
`
