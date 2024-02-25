import styled from 'styled-components'
import type * as T from './column-flex-box.type'

export const Container = styled.div<T.$BoxContainerProps>`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};

	display: flex;
	flex-direction: column;
	gap: ${({ $gap }) => $gap};
`
