import { FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import * as T from './icon-button.type'

export const RoundSquareButton = styled.button<T.$RoundSquareButton>`
	${FLEX_CENTER}

	width: 3rem;
	aspect-ratio: 1/1;

	border-radius: ${BORDER_RADIUS.sm};

	background-color: ${({ $bgColor }) => $bgColor};
	color: ${({ $iconColor }) => $iconColor};

	transition: background-color 0.2s;
	cursor: pointer;

	&:hover {
		background-color: ${({ $hoverBgColor }) => $hoverBgColor};
		color: ${({ $hoverIconColor }) => $hoverIconColor};
	}
`
