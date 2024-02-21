import { CenterFlexBox } from '@/components'
import * as S from './grid-element.style'
import type * as T from './grid-element.type'

const GridElement = ({
	row = 1,
	column = 1,
	rowSpan = 1,
	columnSpan = 1,
	children
}: T.GridElementProps) => {
	return (
		<S.ElementWrapper $row={row} $column={column} $rowSpan={rowSpan} $columnSpan={columnSpan}>
			<CenterFlexBox align="bothAlign">{children}</CenterFlexBox>
		</S.ElementWrapper>
	)
}

export default GridElement
