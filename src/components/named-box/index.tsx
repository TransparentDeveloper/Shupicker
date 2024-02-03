import { COLOR } from '@src/libs/styled-components/reference-tokens'
import * as S from './namedBox.style'
import type * as T from './namedBox.type'

const NamedBox = ({
	boxName,
	backgroundColor = COLOR.grayScale[300],
	borderColor = COLOR.brand.light,
	children,
	...rest
}: T.NamedBoxProps) => {
	return (
		<S.BoxContainer {...rest}>
			<S.BoxName>{boxName}</S.BoxName>
			<S.BoxBody $backgroundColor={backgroundColor} $borderColor={borderColor}>
				{children}
			</S.BoxBody>
		</S.BoxContainer>
	)
}

export default NamedBox
