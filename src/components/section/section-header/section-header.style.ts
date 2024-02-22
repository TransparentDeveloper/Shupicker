import { FLEX_CENTER, JUSTIFY_BETWEEN } from '@/libs/styled-components/css-utils'
import styled from 'styled-components'

export const Container = styled.div`
	${JUSTIFY_BETWEEN}

	width: 100%;
	height: 3rem;

	padding: 1rem;
`
export const ButtonGroup = styled.div`
	${FLEX_CENTER}
	gap: 0.5rem;
	justify-self: start;

	width: fit-content;
	height: fit-content;
`
