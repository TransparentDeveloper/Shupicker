import { ColumnFlexBox, PaddingContainer } from '@/components'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './panel-base.style'
import type * as T from './panel-base.type'

const PanelBase = ({
	backgroundColor = COLOR.grayScale[400],
	children,
	...rest
}: T.PanelBaseProps) => {
	return (
		<S.Container $backgroundColor={backgroundColor} {...rest}>
			<PaddingContainer horizontal="1rem" vertical="1rem">
				<ColumnFlexBox> {children}</ColumnFlexBox>
			</PaddingContainer>
		</S.Container>
	)
}

export default PanelBase
