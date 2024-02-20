import * as S from './center-box.style'
import type * as T from './center-box.type'

const CenterFlexBox = ({ align = 'horizontalAlign', gap = '0', children }: T.CenterBoxProps) => {
	return (
		<S.Container $gap={gap} $align={align}>
			{children}
		</S.Container>
	)
}

export default CenterFlexBox
