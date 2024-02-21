import * as S from './grid.style'
import type * as T from './grid.type'

const Grid = ({
	rows = 1,
	columns = 1,
	rowGap = '0rem',
	columnGap = '0rem',
	children
}: T.GridProps) => {
	return (
		<S.GridWrapper $rows={rows} $columns={columns} $rowGap={rowGap} $columnGap={columnGap}>
			{children}
		</S.GridWrapper>
	)
}

export default Grid
