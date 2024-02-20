import styled from 'styled-components'
import type * as T from './column-flex-box.type'

export const Container = styled.div<T.$BoxContainerProps>`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: ${({ $gap }) => $gap};
`
