import { ALIGN_CENTER, FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'
import type * as T from './adding-member.type'

export const ContentForm = styled.form`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
`
export const ScrollWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 10rem;
`
export const ScrollList = styled.div<T.$ScrollListProps>`
	${({ $isAdditionalTrait }) => ($isAdditionalTrait ? ALIGN_CENTER : FLEX_CENTER)}
	position: absolute;
	width: 100%;
	height: 100%;
	gap: 0.5rem;
	overflow-x: scroll;
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
