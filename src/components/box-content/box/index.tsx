import { PaddingContainer } from '@/components'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './Box.style'
import type * as T from './Box.type'

const Box = ({ backgroundColor = COLOR.grayScale[400], children, ...rest }: T.BoxProps) => {
	return (
		<S.BoxContainer {...rest}>
			<S.BoxBody $backgroundColor={backgroundColor}>
				<PaddingContainer horizontal="1rem" vertical="1rem">
					{children}
				</PaddingContainer>
			</S.BoxBody>
		</S.BoxContainer>
	)
}

export default Box
