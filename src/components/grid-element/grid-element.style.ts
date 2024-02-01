import styled from 'styled-components'
import type * as T from './grid-element.type'

export const ColumnWrapper = styled.div<T.$GridElementProps>`
	width: 100%;
	height: 100%;
	grid-row: ${({ $row }) => $row};
	grid-column: ${({ $column }) => $column};
`
