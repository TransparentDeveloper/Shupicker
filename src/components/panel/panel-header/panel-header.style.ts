import { FLEX_CENTER, JUSTIFY_BETWEEN, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import styled from 'styled-components'

export const Container = styled.header`
	${JUSTIFY_BETWEEN}
	width: 100%;
	height: 3rem;
	padding: 1rem;
`
export const PanelNameText = styled.h3`
	${TEXT_SHADOW_CSS}
`
export const ButtonGroup = styled.div`
	${FLEX_CENTER}
	gap: 0.5rem;

	width: fit-content;
	height: fit-content;
`
