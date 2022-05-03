import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

function App() {
	const isLogged = false;

	return (
		<div className='App'>
			<Helmet>
				<title>Davtion Dev</title>
			</Helmet>
			<BrowserRouter>
				{isLogged ? <PrivateRoutes /> : <PublicRoutes />}
			</BrowserRouter>
		</div>
	);
}

export default App;
