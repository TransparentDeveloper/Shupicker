import * as S from './grid-element.style'
import type * as T from './grid-element.type'

const GridElement = ({ row = 1, column = 1, children }: T.GridElementProps) => {
	return (
		<S.ColumnWrapper $row={row} $column={column}>
			{children}
		</S.ColumnWrapper>
	)
}

export default GridElement
