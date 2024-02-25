import { ColumnFlexBox, PaddingContainer } from '@/components'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './board-base.style'
import type * as T from './board-base.type'

const BoardBase = ({
	backgroundColor = COLOR.grayScale[400],
	children,
	...rest
}: T.BoardBaseProps) => {
	return (
		<S.Container $backgroundColor={backgroundColor} {...rest}>
			<PaddingContainer horizontal="1rem" vertical="1rem">
				<ColumnFlexBox> {children}</ColumnFlexBox>
			</PaddingContainer>
		</S.Container>
	)
}

export default BoardBase
