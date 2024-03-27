import { DefaultLayout } from '@/components'
import { ScreenProvider } from '@/context'
import GlobalStyles from '@/libs/styled-components/global'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '',
				element: <App />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RecoilRoot>
			<ScreenProvider>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ScreenProvider>
		</RecoilRoot>
	</React.StrictMode>
)
