import { COLOR } from '@src/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import Spacer from './spacer'

const Header = () => {
	const height = 10 // 높이 (단위: rem)

	return (
		<>
			<S.Wrapper $height={height}>
				<ServiceTitle>Shupicker</ServiceTitle>
			</S.Wrapper>
			<Spacer x={45} y={height} />
		</>
	)
}

export default Header

type $HeaderProps = {
	$height: number
}

const Wrapper = styled.header<$HeaderProps>`
	width: 100%;
	height: ${({ $height }) => $height + 'rem'};

	color: ${COLOR.grayScale[1500]};
	background-color: ${COLOR.brand.base};

	position: fixed;
	top: 0;
	z-index: 1;

	display: grid;
	grid-template: repeat(3, 1fr) / 1rem 1fr 1rem;
`

const ServiceTitle = styled.h1`
	grid-area: 2/2;

	font-family: 'Giants-Inline';
`

const S = { Wrapper, ServiceTitle }
