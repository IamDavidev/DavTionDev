import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lading from '../pages/public/LandingPage/Landing.page';
import Login from '../pages/public/Login/Login.page';

// const Login = lazy(() => import('../pages/public/Login/Login'));

const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Lading />} />
			<Route path='/iniciar/sesion' element={<Login />} />
			<Route path='*' element={<p>404</p>} />
			<Route path='/crear/cuenta' element={<p> crear cuenta</p>} />
		</Routes>
	);
};

export default PublicRoutes;
