import styled from 'styled-components'
import type * as T from './spacer.type'

export const Box = styled.div<T.$Box>`
	width: ${({ $x }) => $x + 'rem'};
	height: ${({ $y }) => $y + 'rem'};
	display: inline-block;
`
