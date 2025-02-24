import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/styles/global.css'
import Router from './components/Router.tsx'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</StrictMode>
)
