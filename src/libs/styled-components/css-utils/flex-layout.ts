import { css } from 'styled-components'

export const ALIGN_CENTER = css`
	display: flex;
	align-items: center;
`
export const ALIGN_START = css`
	display: flex;
	align-items: start;
`
export const ALIGN_END_CSS = css`
	display: flex;
	align-items: end;
`
export const JUSTIFY_CENTER = css`
	display: flex;
	justify-content: center;
`
export const JUSTIFY_START = css`
	display: flex;
	justify-content: start;
`
export const JUSTIFY_END_CSS = css`
	display: flex;
	justify-content: end;
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
export const FLEX_END = css`
	${ALIGN_END_CSS}
	${JUSTIFY_END_CSS}
`
export const DIRECTION_COLUMN = css`
	display: flex;
	flex-direction: column;
`
