import { COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import * as S from './input.style'
import type * as T from './input.type'

const Input = ({
	width = '18rem',
	fontSize = FONT_SIZE.md,
	bgColor = COLOR.grayScale[200],
	...rest
}: T.InputProps) => {
	return <S.InputBase $width={width} $fontSize={fontSize} $bgColor={bgColor} {...rest} />
}

export default Input
