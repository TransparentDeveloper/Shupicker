import * as S from './namedBox.style'
import type * as T from './namedBox.type'

const NamedBox = ({ boxName, children, ...rest }: T.NamedBoxProps) => {
	return (
		<S.BoxContainer {...rest}>
			<S.BoxName>{boxName}</S.BoxName>
			<S.BoxBody>{children}</S.BoxBody>
		</S.BoxContainer>
	)
}

export default NamedBox
