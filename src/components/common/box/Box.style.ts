import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import { $BoxBodyProps } from './Box.type'

export const BoxContainer = styled.div`
	width: 100%;
	height: 100%;
`
export const BoxName = styled.h3`
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const BoxBody = styled.div<$BoxBodyProps>`
	width: 100%;

	height: 100%;

	background-color: ${({ $backgroundColor }) => $backgroundColor};
	border-radius: ${BORDER_RADIUS.sm};

	box-shadow: 0 0.1rem 0.5rem ${COLOR.grayScale[200]};
`
