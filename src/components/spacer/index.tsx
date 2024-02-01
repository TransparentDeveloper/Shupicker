import * as S from './spacer.style'
import type * as T from './spacer.type'

const Spacer = ({ x, y }: T.SpacerProps) => {
	return (
		<S.Box $x={x} $y={y}>
			Spacer
		</S.Box>
	)
}

export default Spacer
