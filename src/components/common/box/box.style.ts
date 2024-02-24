import { BORDER_RADIUS } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './box.type'

const Container = styled.div<T.$ContainerProps>`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	background-color: ${({ $bgColor }) => $bgColor};
	padding: 1rem;
	border-radius: ${BORDER_RADIUS.sm};
`
