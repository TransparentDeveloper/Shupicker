import { GIANTS_REGULAR } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './input.type'

export const InputBase = styled.input<T.$InputBaseProps>`
	width: ${({ $width }) => $width};
	min-width: 6rem;
	max-width: 100%;

	height: 4rem;
	background-color: ${COLOR.grayScale[200]};
	color: ${COLOR.grayScale[1500]};

	padding: 0.8rem;
	border: none;
	border-radius: ${BORDER_RADIUS.ti};

	${GIANTS_REGULAR}
	font-size: ${FONT_SIZE.md};

	text-align: center;
`
