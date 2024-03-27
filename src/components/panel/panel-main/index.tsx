import type { PropsWithChildren } from 'react'
import * as S from './panel-main.style'
const PanelMain = ({ children }: PropsWithChildren) => {
	return (
		<S.Wrapper>
			<S.ScrollContainer>{children}</S.ScrollContainer>
		</S.Wrapper>
	)
}
export default PanelMain
