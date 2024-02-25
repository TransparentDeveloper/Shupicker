import { FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import * as S from './trait-tag.style'
import type * as T from './trait-tag.type'

const TraitTag = ({
	fontSize = FONT_SIZE.sm,
	bgIntensity = 'light',
	children
}: T.TraitTagProps) => {
	return (
		<S.Wrapper $fontSize={fontSize} $bgIntensity={bgIntensity}>
			{children}
		</S.Wrapper>
	)
}

export default TraitTag
