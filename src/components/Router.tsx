import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CalendarPage from '../pages/CalendarPage.tsx'
import ChartsPage from '../pages/ChartsPage.tsx'
import EmailsPage from '../pages/EmailsPage.tsx'
import FormsPage from '../pages/FormsPage.tsx'
import HomePage from '../pages/HomePage.tsx'
import LoginPage from '../pages/LoginPage.tsx'
import MapsPage from '../pages/MapsPage.tsx'
import PagesPage from '../pages/PagesPage.tsx'
import ProfilePage from '../pages/ProfilePage.tsx'
import TablePage from '../pages/TablePage.tsx'
import UIPage from '../pages/UIPage.tsx'
import ProtectedRoutes from '../utils/ProtectedRoutes.tsx'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login'>
					{localStorage.getItem('auth_token') ? (
						<Navigate to='/' />
					) : (
						<Route index element={<LoginPage />} />
					)}
				</Route>

				<Route element={<ProtectedRoutes />}>
					<Route index element={<HomePage />} />
					<Route path='ui' element={<UIPage />} />
					<Route path='emails' element={<EmailsPage />} />
					<Route path='charts' element={<ChartsPage />} />
					<Route path='table' element={<TablePage />} />
					<Route path='forms' element={<FormsPage />} />
					<Route path='calendar' element={<CalendarPage />} />
					<Route path='pages' element={<PagesPage />} />
					<Route path='maps' element={<MapsPage />} />
					<Route path='profile' element={<ProfilePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
