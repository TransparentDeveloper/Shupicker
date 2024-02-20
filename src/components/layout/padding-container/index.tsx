import * as S from './padding-container.style'
import type * as T from './padding-container.type'

const PaddingContainer = ({
	horizontal = '0rem',
	vertical = '0rem',
	children
}: T.PaddingContainerProps) => {
	return (
		<S.Container $horizontal={horizontal} $vertical={vertical}>
			{children}
		</S.Container>
	)
}

export default PaddingContainer
