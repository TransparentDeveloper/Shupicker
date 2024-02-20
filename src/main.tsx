import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import GlobalStyles from './libs/styled-components/global.tsx'

const router = createBrowserRouter([
	{
		path: '',
		element: <App />
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyles />
		<RouterProvider router={router} />
	</React.StrictMode>
)
