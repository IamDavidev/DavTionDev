import { useQuery } from '@apollo/client';
// import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { GET_USER } from './gql/getUser.gql';

import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

function App() {
	const { data, error, loading } = useQuery(GET_USER);

	if (loading) return <p>loading</p>;
	if (error) return <p>error</p>;
	// if (!data) return <p>no data</p>;
	const isLogged = data.userDev.isAuthenticated || false;

	console.log(error);
	console.log(data);
	console.log(isLogged);

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
