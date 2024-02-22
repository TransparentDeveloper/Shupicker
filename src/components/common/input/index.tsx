import * as S from './input.style'
import type * as T from './input.type'

const Input = ({ width = '18rem', ...rest }: T.InputProps) => {
	return <S.InputBase $width={width} {...rest} />
}

export default Input
