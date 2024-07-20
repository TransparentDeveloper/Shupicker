import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import '../global.css'
import App from './App.tsx'
import {RootLayout} from './components/layouts/root-layout.tsx'
import {SheetProvider} from './contexts/sheet-context/index.tsx'
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: (
					<SheetProvider>
						<App />
					</SheetProvider>
				),
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider {...{router}} />
	</React.StrictMode>,
)
