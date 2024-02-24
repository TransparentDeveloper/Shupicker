import { FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled, { css } from 'styled-components'
import type * as T from './button.type'

export const SIZE_CSS = {
	fit: css`
		width: fit-content;
	`,
	full: css`
		width: 100%;
	`
}

export const ButtonBase = styled.button<T.$ButtonBase>`
	${FLEX_CENTER}
	text-align: center;

	${({ $size }) => SIZE_CSS[$size]}
	min-width: 5rem;
	height: 3.5rem;

	border-radius: ${BORDER_RADIUS.sm};
	color: ${COLOR.grayScale[0]};
	background-color: ${COLOR.grayScale[1500]};

	padding: 0.8rem;
	transition: background-color 200ms;

	&:hover {
		color: ${COLOR.grayScale[1500]};
		background-color: ${COLOR.brand.main.light};
	}
`
