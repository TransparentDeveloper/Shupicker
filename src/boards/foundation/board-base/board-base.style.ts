import { BOX_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import * as T from './board-base.type'

export const Container = styled.div<T.$Container>`
	width: 100%;
	height: 100%;

	background-color: ${({ $backgroundColor }) => $backgroundColor};
	border-radius: ${BORDER_RADIUS.sm};

	${BOX_SHADOW_CSS}
`
