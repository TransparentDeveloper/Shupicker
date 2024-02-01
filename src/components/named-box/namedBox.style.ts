import { COLOR } from '@src/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const BoxContainer = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	align-content: center;
	justify-content: start;
	flex-direction: column;
	gap: 0.5rem;
`
export const BoxName = styled.h2`
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const BoxBody = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 3.5rem;

	border: 0.3rem solid ${COLOR.grayScale[1500]};
	border-radius: 0.2rem;

	padding: 1rem;
`
