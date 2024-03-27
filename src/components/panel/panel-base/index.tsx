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
				{/* header 와 main 사이에 2rem 간격을 제공합니다. */}
				<ColumnFlexBox gap="2rem"> {children}</ColumnFlexBox>
			</PaddingContainer>
		</S.Container>
	)
}

export default PanelBase
