import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/tareas' element={<p> tareas</p>} />
		</Routes>
	);
};

export default PrivateRoutes;
