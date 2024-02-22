import * as S from './button.style'
import type * as T from './button.type'

const Button = ({ size = 'fit', children }: T.ButtonProps) => {
	return <S.ButtonBase $size={size}>{children}</S.ButtonBase>
}

export default Button
