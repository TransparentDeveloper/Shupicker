import { ALIGN_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import { $HeaderBase } from './header.type'

export const HeaderBase = styled.header<$HeaderBase>`
	${ALIGN_CENTER}
	justify-content: ${({ $isMobile }) => ($isMobile ? 'center' : 'start')};
	width: 100%;
	height: ${({ $height }) => $height};
	color: ${COLOR.grayScale[1500]};
	background-color: ${COLOR.brand.main.base};
	padding: 0.1rem 3.5rem;
`
export const ServiceTitle = styled.h1`
	font-family: 'Giants-Inline';
	${TEXT_SHADOW_CSS}
`
