import { FLEX_START } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const TableWrapper = styled.table`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: ${COLOR.grayScale[400]};
`
export const XScrollBase = styled.div`
	${FLEX_START}
	width: 100%;
	height: 100%;
	position: absolute;
	width: 100%;
	overflow-x: scroll;
`
