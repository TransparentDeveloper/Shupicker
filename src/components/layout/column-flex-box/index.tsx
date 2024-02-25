import * as S from './column-flex-box.style'
import type * as T from './column-flex-box.type'

const ColumnFlexBox = ({
	width = '100%',
	height = '100%',
	gap = '0',
	children
}: T.ColumnFlexBoxProps) => {
	return (
		<S.Container $width={width} $height={height} $gap={gap}>
			{children}
		</S.Container>
	)
}

export default ColumnFlexBox
