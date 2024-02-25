import { FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import * as S from './tagging-text.style'
import type * as T from './tagging-text.type'

const TaggingText = ({
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

export default TaggingText
