import { COLOR } from '@src/libs/styled-components/reference-tokens'
import styled from 'styled-components'

const Header = () => {
	return (
		<S.Wrapper>
			<ServiceTitle>Shupicker</ServiceTitle>
		</S.Wrapper>
	)
}

export default Header

const Wrapper = styled.header`
	width: 100%;
	height: 10rem;

	color: ${COLOR.grayScale[1500]};
	background-color: ${COLOR.brand.base};

	position: fixed;
	top: 0;

	display: grid;
	grid-template: repeat(3, 1fr) / 1rem 1fr 1rem;
`

const ServiceTitle = styled.h1`
	grid-area: 2/2;

	font-family: 'Giants-Inline';
`

const S = { Wrapper, ServiceTitle }
