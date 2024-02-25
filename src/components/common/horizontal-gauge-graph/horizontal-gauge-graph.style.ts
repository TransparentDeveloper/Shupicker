import { FLEX_START } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './horizontal-gauge-graph.type'

export const Wrapper = styled.div<T.$WrapperProps>`
	position: relative;

	${FLEX_START}

	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};

	background-color: ${COLOR.grayScale[1300]};
	border-radius: ${BORDER_RADIUS.sm};
`

export const Gauge = styled.div<T.$Gauge>`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};

	background-color: ${({ $bgColor }) => $bgColor};
	border-radius: ${BORDER_RADIUS.sm};
`
