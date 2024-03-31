import { DialogProvider, ScreenProvider } from '@/context'
import { Outlet } from 'react-router'
import { ColumnFlexBox } from '..'
import * as S from './default-layout.style'
const DefaultLayout = () => {
	return (
		<DialogProvider>
			<ScreenProvider>
				<S.DefaultLayoutBase>
					<ColumnFlexBox gap="1rem">
						<Outlet />
					</ColumnFlexBox>
				</S.DefaultLayoutBase>
			</ScreenProvider>
		</DialogProvider>
	)
}
export default DefaultLayout
