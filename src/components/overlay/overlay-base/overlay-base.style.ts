import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	background-color: rgba(3, 3, 3, 0.4);
`
export const Card = styled.div`
	width: 60vw;
	height: fit-content;
	min-height: 60vh;

	position: relative;

	border-radius: ${BORDER_RADIUS.sm};
	background-color: ${COLOR.grayScale[300]};
`

export const CloseButton = styled.button`
	width: 1.5rem;
	aspect-ratio: 1/1;

	position: absolute;
	top: 1.5rem;
	right: 1.5rem;

	font-size: ${FONT_SIZE.ti};

	color: ${COLOR.grayScale[0]};
	background-color: ${COLOR.system.warning};

	border-radius: ${BORDER_RADIUS.lg};
	cursor: pointer;
	&:hover {
		color: ${COLOR.grayScale[300]};
		transform: scale(105%);
	}
`
