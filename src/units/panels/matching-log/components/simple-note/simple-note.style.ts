import { BORDER_INSET, FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
	padding: 0.5rem;
`
export const SimpleMemo = styled.section`
	${BORDER_INSET}
	${FLEX_CENTER}
  text-align: center;
	width: 100%;
	height: 5rem;

	background-color: ${COLOR.grayScale[250]};
	border-radius: ${BORDER_RADIUS.md};
`
