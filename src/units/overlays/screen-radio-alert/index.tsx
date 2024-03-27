import { Spacer } from '@/components'
import { OverlayBase, OverlayHeader } from '@/components/overlay'
import { DIRECTION_COLUMN, FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

const ScreenRadioAlert = () => {
	return (
		<OverlayBase width="90dvw" height="30dvh">
			<OverlayHeader overlayName="⚠️ Alert" />
			<S.MainContent>
				<span>화면 비율 중, 가로 너비가 더 커야합니다. 🥲</span>
				<Spacer height={2} />
				<S.TipText>Tip: 모바일 환경이라면, 디바이스를 눕혀보세요:)</S.TipText>
			</S.MainContent>
		</OverlayBase>
	)
}

export default ScreenRadioAlert

const MainContent = styled.div`
	${FLEX_CENTER}
	${DIRECTION_COLUMN}
	text-align: center;
	width: 100%;
	height: 75%;
`
const TipText = styled.p`
	font-size: ${FONT_SIZE.ti};
	color: ${COLOR.grayScale[1000]};
	word-break: keep-all;
`
const S = {
	MainContent,
	TipText
}
