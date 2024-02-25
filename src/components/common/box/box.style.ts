import { BORDER_SOLID } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './box.type'

export const Container = styled.div<T.$ContainerProps>`
	width: ${({ $width }) => $width};
	min-width: '5rem';
	height: ${({ $height }) => $height};
	min-height: '5rem';
	background-color: ${({ $bgColor }) => $bgColor};
	padding: 1rem;
	overflow: hidden;
	border-radius: ${BORDER_RADIUS.sm};
	${BORDER_SOLID}
`
