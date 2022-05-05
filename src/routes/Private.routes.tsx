import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='/tareas' replace />} />
			<Route path='/tareas' element={<p> tareas</p>} />
		</Routes>
	);
};

export default PrivateRoutes;
