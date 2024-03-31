import {
	ALIGN_CENTER,
	DIRECTION_COLUMN,
	FLEX_CENTER,
	FLEX_START
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const ContentForm = styled.form`
	${DIRECTION_COLUMN}
	${ALIGN_CENTER}
	justify-content: space-around;

	gap: 1rem;
	width: 100%;
	height: 100%;
`
export const ButtonWrapper = styled.div`
	${FLEX_CENTER}
	position: absolute;
	gap: 1rem;
	width: 100%;
	height: 5rem;
	bottom: -5.2rem;
	padding: 0 2rem;
	border-bottom-right-radius: ${BORDER_RADIUS.sm};
	border-bottom-left-radius: ${BORDER_RADIUS.sm};
	background-color: ${COLOR.grayScale[400]};
	right: 0;
`
export const InputWrapper = styled.div`
	${FLEX_CENTER}
	position: relative;
	width: 100%;
	height: 100%;
`
export const OptionList = styled.div`
	${FLEX_START}
	position: absolute;
	top: -1.4rem;
	gap: 0.5rem;
	width: 100%;
	height: fit-content;
	overflow-x: scroll;
`
