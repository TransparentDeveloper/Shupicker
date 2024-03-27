import * as S from './spacer.style'
import type * as T from './spacer.type'

const Spacer = ({ width = 0.1, height = 0.1 }: T.SpacerProps) => {
	return <S.SpacerBase $width={width} $height={height} />
}

export default Spacer
