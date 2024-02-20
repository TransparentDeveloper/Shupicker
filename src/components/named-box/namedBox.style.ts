import styled from 'styled-components'
import { $BoxBodyProps } from './namedBox.type'

export const BoxContainer = styled.div`
	width: 100%;
	height: fit-content;
`
export const BoxName = styled.h2`
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const BoxBody = styled.div<$BoxBodyProps>`
	width: 100%;
	height: fit-content;
	min-height: 3.5rem;

	background-color: ${({ $backgroundColor }) => $backgroundColor};
	border: 0.1rem solid ${({ $borderColor }) => $borderColor};
	border-radius: 0.2rem;
`
