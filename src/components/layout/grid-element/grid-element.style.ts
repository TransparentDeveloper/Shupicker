import styled from 'styled-components'
import type * as T from './grid-element.type'

export const ElementWrapper = styled.div<T.$ElementWrapper>`
	width: 100%;
	height: 100%;
	grid-row: ${({ $row }) => $row} / span ${({ $rowSpan }) => $rowSpan};
	grid-column: ${({ $column }) => $column} / span ${({ $columnSpan }) => $columnSpan};
`
