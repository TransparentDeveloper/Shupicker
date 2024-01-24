import styled from 'styled-components'

type CompressionContainerProps = {
	horizontal: string
	vertical: string
	children?: React.ReactNode
}

const CompressionContainer = ({ horizontal, vertical, children }: CompressionContainerProps) => {
	return (
		<S.Container $horizontal={horizontal} $vertical={vertical}>
			{children}
		</S.Container>
	)
}

export default CompressionContainer

type CompressionContainerStyleProps = {
	$horizontal: string
	$vertical: string
}

const Container = styled.div<CompressionContainerStyleProps>`
	width: 100%;
	height: 100%;

	background-color: red;

	padding: ${({ $vertical }) => $vertical} ${({ $horizontal }) => $horizontal};
`

const S = {
	Container
}
