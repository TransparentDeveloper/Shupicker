import * as S from './grid.style'
import type * as T from './grid.type'

const Grid = ({ rows = 1, columns = 1, children }: T.GridProps) => {
	return (
		<S.GridWrapper $rows={rows} $columns={columns}>
			{children}
		</S.GridWrapper>
	)
}

export default Grid
