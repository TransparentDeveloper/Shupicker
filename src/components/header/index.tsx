import Spacer from '../spacer'
import * as S from './header.style'

const Header = () => {
	const height = 10 // 높이 (단위: rem)

	return (
		<>
			<S.OverlayHeader $height={height}>
				<S.ServiceTitle>Shupicker</S.ServiceTitle>
			</S.OverlayHeader>
			<Spacer x={45} y={height} />
		</>
	)
}

export default Header
