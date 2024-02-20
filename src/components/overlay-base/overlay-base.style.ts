import { COLOR } from '@src/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;

	width: 100%;
	height: 100%;
	background-color: rgba(3, 3, 3, 0.4);
`
export const Card = styled.div`
	width: 60vw;
	height: fit-content;
	min-height: 60vh;

	border-radius: 0.3rem;
	background-color: ${COLOR.grayScale[300]};
`
