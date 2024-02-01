import * as S from './compression-container.style'
import type * as T from './compression-container.type'

const CompressionContainer = ({
	horizontal = '0',
	vertical = '0',
	children
}: T.CompressionContainerProps) => {
	return (
		<S.Container $horizontal={horizontal} $vertical={vertical}>
			{children}
		</S.Container>
	)
}

export default CompressionContainer
