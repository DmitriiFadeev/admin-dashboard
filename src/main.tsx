import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import Router from './components/Router.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>
)
