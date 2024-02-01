import styled from 'styled-components'
import type * as T from './compression-container.type'

export const Container = styled.div<T.$ContainerProps>`
	width: 100%;
	height: 100%;

	padding: ${({ $vertical }) => $vertical} ${({ $horizontal }) => $horizontal};
`
