import { FC, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Lading from '../pages/public/LandingPage/Landing.page';
// import Login from '../pages/public/Login/Login.page';

const Login = lazy(() => import('../pages/public/Login/Login.page'));

const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='/' replace />} />
			<Route path='/' element={<Lading />} />
			<Route path='/iniciar/sesion' element={<Login />} />
			<Route path='/crear/cuenta' element={<p> crear cuenta</p>} />
		</Routes>
	);
};

export default PublicRoutes;
