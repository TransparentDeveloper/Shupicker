import { ALIGN_CENTER, DIRECTION_COLUMN, FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Container = styled.div`
	${FLEX_CENTER}
	gap: 0.5rem;
	width: 100%;
	height: 100%;
`
export const RecordedInputBase = styled.div`
	${DIRECTION_COLUMN}
	${FLEX_CENTER}
  gap: 0.1rem;
	width: 100%;
	height: 100%;
`
export const ScrollWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 1.5rem;
	overflow-y: visible;
`
export const ScrollList = styled.div`
	${ALIGN_CENTER}
	position: absolute;
	top: -0.3rem;
	width: 100%;
	height: fit-content;
	gap: 0.5rem;
	overflow-x: scroll;
`
export const RecordToggle = styled.div`
	${ALIGN_CENTER}
	flex-wrap: nowrap;
	gap: 0.5rem;
	width: fit-content;
	height: fit-content;
	padding: 0 0.5rem;
	background-color: ${COLOR.grayScale[250]};
	border-radius: ${BORDER_RADIUS.lg};
`
export const RecordText = styled.div`
	font-size: ${FONT_SIZE.ti};
	color: ${COLOR.grayScale[1000]};
	white-space: nowrap;
`
