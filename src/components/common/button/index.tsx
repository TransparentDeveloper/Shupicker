import * as S from './button.style'
import type * as T from './button.type'

const Button = ({ size = 'fit', children, ...rest }: T.ButtonProps) => {
	return (
		<S.ButtonBase $size={size} {...rest}>
			{children}
		</S.ButtonBase>
	)
}

export default Button
