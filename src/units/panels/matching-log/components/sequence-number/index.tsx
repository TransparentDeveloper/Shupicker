import * as S from './sequence-number.style'
import type * as T from './sequence-number.type'

export const SequenceNumber = ({ sequence }: T.SequenceNumberProps) => {
	return (
		<S.Wrapper>
			<S.Sequence>{sequence}</S.Sequence>
		</S.Wrapper>
	)
}
