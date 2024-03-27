import { Outlet } from 'react-router'
import { ColumnFlexBox } from '..'
import * as S from './default-layout.style'
const DefaultLayout = () => {
	return (
		<S.DefaultLayoutBase>
			<ColumnFlexBox gap="1rem">
				<Outlet />
			</ColumnFlexBox>
		</S.DefaultLayoutBase>
	)
}
export default DefaultLayout
