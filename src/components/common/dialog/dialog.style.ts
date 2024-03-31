import { FLEX_CENTER, GIANTS_INLINE, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import {
	BORDER_RADIUS,
	BREAK_POINT,
	COLOR,
	FONT_SIZE
} from '@/libs/styled-components/reference-tokens'
import styled, { css } from 'styled-components'
import type * as T from './dialog.type'

export const SIZE_CSS = {
	default: css`
		width: 45dvw;
		height: 50dvh;
		@media screen and (max-width: ${BREAK_POINT.mobile.maxWidth + 'px'}) {
			width: 55dvw;
			height: 60dvh;
		}
	`,
	small: css`
		width: 40dvw;
		height: 30dvh;
	`
}
export const FullSizeFilter = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	background-color: rgba(3, 3, 3, 0.6);
`
export const DialogBase = styled.div<T.$DialogBaseProps>`
	position: relative;

	${({ $size }) => SIZE_CSS[$size]}

	border-radius: ${BORDER_RADIUS.sm};
	background-color: ${COLOR.grayScale[300]};
	padding: 2rem;
`
export const CloseButton = styled.button`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;

	${FLEX_CENTER}

	width: 1.5rem;
	aspect-ratio: 1/1;
	font-size: ${FONT_SIZE.ti};

	color: ${COLOR.grayScale[0]};
	background-color: ${COLOR.system.warning};

	border-radius: ${BORDER_RADIUS.lg};

	cursor: pointer;
	&:active {
		color: ${COLOR.grayScale[300]};
	}
`
export const DialogTitle = styled.h2`
	${GIANTS_INLINE}
	${TEXT_SHADOW_CSS}
`
