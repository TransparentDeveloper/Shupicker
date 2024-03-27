import { BOX_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import * as T from './panel-base.type'

export const Container = styled.div<T.$Container>`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};

	background-color: ${({ $backgroundColor }) => $backgroundColor};
	border-radius: ${BORDER_RADIUS.sm};

	${BOX_SHADOW_CSS}
`
