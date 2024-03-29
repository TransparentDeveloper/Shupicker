import * as S from './header.style'
import type { HeaderProps } from './header.type'

const Header = ({ height, isMobile = false }: HeaderProps) => {
	return (
		<S.HeaderBase $height={height} $isMobile={isMobile}>
			<S.ServiceTitle>Shupicker 🏸</S.ServiceTitle>
		</S.HeaderBase>
	)
}

export default Header
