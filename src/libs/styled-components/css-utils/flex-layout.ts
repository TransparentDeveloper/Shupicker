import { css } from 'styled-components'

export const ALIGN_CENTER = css`
	display: flex;
	align-items: center;
`
export const ALIGN_START = css`
	display: flex;
	align-items: start;
`
export const JUSTIFY_CENTER = css`
	display: flex;
	justify-content: center;
`
export const JUSTIFY_START = css`
	display: flex;
	justify-content: start;
`
export const JUSTIFY_BETWEEN = css`
	display: flex;
	justify-content: space-between;
`
export const FLEX_CENTER = css`
	${ALIGN_CENTER}
	${JUSTIFY_CENTER}
`
export const FLEX_START = css`
	${ALIGN_START}
	${JUSTIFY_START}
`
export const DIRECTION_COLUMN = css`
	display: flex;
	flex-direction: column;
`
