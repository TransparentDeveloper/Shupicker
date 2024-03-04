import { ALIGN_CENTER, FLEX_CENTER } from '@/libs/styled-components/css-utils'
import styled, { css } from 'styled-components'
import type * as T from './center-box.type'

export const AlignCSS = {
	horizontalAlign: css`
		${FLEX_CENTER}
		align-items: start;
	`,
	verticalAlign: css`
		${ALIGN_CENTER}
		justify-content: start;
	`,
	bothAlign: css`
		${FLEX_CENTER}
	`
}

export const Container = styled.div<T.$ContainerProps>`
	width: 100%;
	height: 100%;
	gap: ${({ $gap }) => $gap};

	${({ $align }) => AlignCSS[$align]};
`
