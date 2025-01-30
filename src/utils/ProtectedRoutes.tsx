import { Navigate, Outlet } from 'react-router-dom'

const Main = () => {
	return <Outlet />
}

const ProtectedRoutes = () => {
	const user = true
	return user ? <Main /> : <Navigate to='/login' />
}

export default ProtectedRoutes
