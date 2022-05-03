import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../pages/public/Login/Login';

const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Link to='/iniciar/sesion'>iniciar sesión</Link>}
			/>
			<Route path='/iniciar/sesion' element={<Login />} />
			<Route path='*' element={<p>404</p>} />
			<Route path='/crear/cuenta' element={<p> crear cuenta</p>} />
		</Routes>
	);
};

export default PublicRoutes;
