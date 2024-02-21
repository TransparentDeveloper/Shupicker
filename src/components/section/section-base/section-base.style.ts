import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import * as T from './section-base.type'

export const Container = styled.div<T.$Container>`
	width: 100%;
	height: 100%;

	background-color: ${({ $backgroundColor }) => $backgroundColor};
	border-radius: ${BORDER_RADIUS.sm};

	box-shadow: 0 0.1rem 0.5rem ${COLOR.grayScale[200]};
`
