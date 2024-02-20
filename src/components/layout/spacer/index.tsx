import * as S from './spacer.style'
import type * as T from './spacer.type'

const Spacer = ({ x = 0, y = 0 }: T.SpacerProps) => {
	return <S.Box $x={x} $y={y} />
}

export default Spacer
