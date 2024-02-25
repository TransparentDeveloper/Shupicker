import { GIANTS_INLINE } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled, { css } from 'styled-components'
import type * as T from './tagging-text.type'

export const BgIntensityCSS = {
	light: css`
		background-color: ${COLOR.grayScale[450]};
	`,
	weight: css`
		background-color: ${COLOR.grayScale[250]};
	`
}
export const Wrapper = styled.span<T.$WrapperProps>`
	display: inline-block;
	${GIANTS_INLINE}
	${({ $bgIntensity }) => BgIntensityCSS[$bgIntensity]}
	width: fit-content;
	height: fit-content;
	padding: 0.3rem;
	color: ${COLOR.grayScale[1500]};
	border-radius: ${BORDER_RADIUS.ti};
	box-shadow: 0.1px 0.1px 1px ${COLOR.grayScale[100]};
	font-size: ${({ $fontSize }) => $fontSize};
`
