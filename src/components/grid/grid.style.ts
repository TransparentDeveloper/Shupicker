import styled from 'styled-components'
import type * as T from './grid.type'

export const GridWrapper = styled.div<T.$GridWrapperProps>`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template: repeat(${({ $rows }) => $rows}, 1fr) / repeat(${({ $columns }) => $columns}, 1fr);
	padding: 1rem;

	gap: 1rem;
`
