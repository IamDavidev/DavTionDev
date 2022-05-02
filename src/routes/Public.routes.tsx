import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<p>home </p>} />
			<Route path='/login' element={<p>login </p>} />
		</Routes>
	);
};

export default PublicRoutes;
