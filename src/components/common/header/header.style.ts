import { COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './header.type'

export const OverlayHeader = styled.header<T.$OverlayHeader>`
	width: 100%;
	height: ${({ $height }) => $height + 'rem'};

	color: ${COLOR.grayScale[1500]};
	background-color: ${COLOR.brand.base};

	position: fixed;
	top: 0;
	z-index: 100;

	display: grid;
	grid-template: repeat(3, 1fr) / 1rem 1fr 1rem;
`
export const ServiceTitle = styled.h1`
	grid-area: 2/2;

	font-family: 'Giants-Inline';
`
