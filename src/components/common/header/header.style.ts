import { ALIGN_CENTER } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const HeaderBase = styled.header`
	${ALIGN_CENTER}

	width: 100%;
	height: 8vh;

	color: ${COLOR.grayScale[1500]};
	background-color: ${COLOR.brand.main.base};

	padding: 0.1rem 3.5rem;
`
export const ServiceTitle = styled.h1`
	font-family: 'Giants-Inline';
`
