import styled from 'styled-components'
import type * as T from './spacer.type'

export const SpacerBase = styled.div<T.$SpacerBaseProps>`
	width: ${({ $width }) => $width + 'rem'};
	height: ${({ $height }) => $height + 'rem'};
	display: inline-block;
`
