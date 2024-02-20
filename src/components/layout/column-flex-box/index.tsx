import * as S from './column-flex-box.style'
import type * as T from './column-flex-box.type'

const ColumnFlexBox = ({ gap = '0', children }: T.ColumnFlexBoxProps) => {
	return <S.Container $gap={gap}>{children}</S.Container>
}

export default ColumnFlexBox
