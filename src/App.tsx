import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { getOnAuthUser } from './lib/services/getOnAtuthUser';

// routes
import Loading from './pages/layouts/Loading/Loading.layout';
import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

function App() {
	const [isLogged, setIsLogged] = useState(false);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		getOnAuthUser({ setIsLoggedIn: setIsLogged, setLoading: setloading });
	}, []);

	return (
		<div className='App'>
			<Helmet>
				<title>Davtion Dev</title>
			</Helmet>
			{loading ? (
				<Loading />
			) : (
				<BrowserRouter>
					{isLogged ? <PrivateRoutes /> : <PublicRoutes />}
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
