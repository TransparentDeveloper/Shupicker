import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './box.style'
import type * as T from './box.type'

const Box = ({
	width = 'fit-content',
	height = 'fit-content',
	bgColor = COLOR.grayScale[300],
	children,
	...rest
}: T.BoxProps) => {
	return (
		<S.Container $width={width} $height={height} $bgColor={bgColor} {...rest}>
			{children}
		</S.Container>
	)
}
export default Box
