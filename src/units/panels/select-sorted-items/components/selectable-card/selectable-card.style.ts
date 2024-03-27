import { Box } from '@/components'
import { FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const Card = styled(Box)`
	transition: background-color 0.2s;
	cursor: pointer;
`
export const NameText = styled.h2`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
	color: ${COLOR.grayScale[1500]};
	text-align: center;
	${TEXT_SHADOW_CSS}
`
export const GaugeTitle = styled.span`
	${TEXT_SHADOW_CSS}
`
