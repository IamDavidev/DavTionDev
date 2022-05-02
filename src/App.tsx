import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

function App() {
	const [isLogged, _] = useState(false);

	return (
		<div className='App'>
			<BrowserRouter>
				{isLogged ? <PrivateRoutes /> : <PublicRoutes />}
			</BrowserRouter>
		</div>
	);
}

export default App;
