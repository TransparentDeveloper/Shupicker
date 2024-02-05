import * as S from './grid-element.style'
import type * as T from './grid-element.type'

const GridElement = ({ row = 1, column = 1, children }: T.GridElementProps) => {
	return (
		<S.ElementWrapper $row={row} $column={column}>
			{children}
		</S.ElementWrapper>
	)
}

export default GridElement
