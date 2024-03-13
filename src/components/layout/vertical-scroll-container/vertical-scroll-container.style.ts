import { DIRECTION_COLUMN } from '@/libs/styled-components/css-utils'
import styled from 'styled-components'
import type { $ContainerProps } from './vertical-scroll-container.type'

export const Container = styled.div<$ContainerProps>`
	${DIRECTION_COLUMN}
	gap: ${({ $gap }) => $gap};
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	overflow-y: scroll;
	overflow-x: hidden;
`
