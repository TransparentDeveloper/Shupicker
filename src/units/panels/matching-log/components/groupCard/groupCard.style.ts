import {
	ALIGN_CENTER,
	BORDER_INSET,
	GIANTS_INLINE,
	JUSTIFY_START
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

export const IdWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: visible;
	${ALIGN_CENTER}
`
export const IdText = styled.h1`
	${GIANTS_INLINE}
	color: ${COLOR.grayScale[1500]};
	opacity: 0.2;
	text-align: start;
	transform: translate(30%, 3%) scale(170%);
`
export const TaggingListContainer = styled.div`
	${ALIGN_CENTER}
	${JUSTIFY_START}
  flex-wrap: wrap;
	gap: 1rem;
	width: 100%;
	height: 100%;
	border-radius: ${BORDER_RADIUS.md};
	padding: 0.5rem;
`
export const MemoWrapper = styled.div`
	${ALIGN_CENTER}
	gap: 0.5rem;
	width: 100%;
	height: 100%;
	border-radius: ${BORDER_RADIUS.md};
`
export const MemoText = styled.span`
	width: 100%;
	height: 100%;
	font-size: ${FONT_SIZE.ti};

	background-color: ${COLOR.grayScale[250]};
	border-radius: ${BORDER_RADIUS.md};
	padding: 0.1rem 0.3rem;
	${BORDER_INSET}

	text-align: center;

	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	line-height: 2.1rem;
`
