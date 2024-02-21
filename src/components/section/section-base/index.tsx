import { PaddingContainer } from '@/components'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './section-base.style'
import type * as T from './section-base.type'

const SectionBase = ({
	backgroundColor = COLOR.grayScale[400],
	children,
	...rest
}: T.SectionBaseProps) => {
	return (
		<S.Container $backgroundColor={backgroundColor} {...rest}>
			<PaddingContainer horizontal="1rem" vertical="1rem">
				{children}
			</PaddingContainer>
		</S.Container>
	)
}

export default SectionBase
