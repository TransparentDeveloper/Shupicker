import { GIANTS_REGULAR, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './input.type'

export const InputBase = styled.input<T.$InputBaseProps>`
	width: ${({ $width }) => $width};
	min-width: 3rem;
	max-width: 100%;

	height: 4rem;
	background-color: ${({ $bgColor }) => $bgColor};
	color: ${COLOR.grayScale[1500]};

	padding: 0.8rem;
	border: none;
	border-radius: ${BORDER_RADIUS.ti};

	${GIANTS_REGULAR}
	font-size: ${({ $fontSize }) => $fontSize};

	text-align: center;

	&::placeholder {
		${TEXT_SHADOW_CSS}
	}
`
