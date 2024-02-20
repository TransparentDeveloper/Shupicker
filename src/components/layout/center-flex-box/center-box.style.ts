import styled, { css } from 'styled-components'
import type * as T from './center-box.type'

export const AlignCSS = {
	horizontalAlign: css`
		justify-content: center;
		align-items: start;
	`,
	verticalAlign: css`
		justify-content: start;
		align-items: center;
	`,
	bothAlign: css`
		justify-content: center;
		align-items: center;
	`
}

export const Container = styled.div<T.$ContainerProps>`
	width: 100%;
	height: 100%;
	display: flex;
	gap: ${({ $gap }) => $gap};

	${({ $align }) => AlignCSS[$align]};
`
