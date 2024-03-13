import * as S from './vertical-scroll-container.style'
import type { VerticalScrollContainerProps } from './vertical-scroll-container.type'

export const VerticalScrollContainer = ({
	width = '100%',
	height = '100%',
	gap = '0rem',
	children,
	...rest
}: VerticalScrollContainerProps) => {
	return (
		<S.Container {...rest} $width={width} $height={height} $gap={gap}>
			{children}
		</S.Container>
	)
}
