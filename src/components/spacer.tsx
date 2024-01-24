import styled from 'styled-components'

type SpacerProps = {
	x: number
	y: number
}

const Spacer = ({ x, y }: SpacerProps) => {
	return (
		<S.Box $x={x} $y={y}>
			Spacer
		</S.Box>
	)
}

export default Spacer

type $SpacerProps = {
	$x: number
	$y: number
}

const Box = styled.div<$SpacerProps>`
	width: ${({ $x }) => $x + 'rem'};
	height: ${({ $y }) => $y + 'rem'};

	display: inline-block;

	background-color: pink;
`

const S = {
	Box
}
