import {Outlet} from 'react-router-dom'

export const RootLayout = () => {
	return (
		<div className='flex h-dvh w-dvw justify-center overflow-hidden bg-black p-2'>
			<div className='h-full w-full max-w-[1200px]'>
				<Outlet />
			</div>
		</div>
	)
}
