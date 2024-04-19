import * as S from './simple-note.style'
import type * as T from './simple-note.type'

export const SimpleNote = ({ memo }: T.SimpleNoteProps) => {
	return (
		<S.Wrapper>
			<S.SimpleMemo>{memo}</S.SimpleMemo>
		</S.Wrapper>
	)
}
