import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { authFirebase } from './config/firebase.config';
import { userStateClient } from './constants/client/state';
import { userStateType } from './interfaces/state.interface';
import Loading from './pages/layouts/Loading/Loading';

import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

function App() {
	const [isLogged, setIsLogged] = useState(false);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		onAuthStateChanged(authFirebase, (user: any) => {
			if (!user) return setloading(false);

			const { displayName, email, photoURL, uid, metadata } = user;

			const userOnAtuth: userStateType = {
				name: displayName,
				email,
				photoURL,
				_uid: uid,
				_token: user.accessToken,
				isLoggedIn: true,
				lastLogin: metadata.lastSignInTime,
			};

			console.log('>> ejecutando useEffect');
			setloading(false);
			setIsLogged(true);

			return userStateClient({
				...userStateClient,
				isAuthenticated: true,
				user: userOnAtuth,
			});
		});
	}, []);

	return (
		<div className='App'>
			<Helmet>
				<title>Davtion Dev</title>
			</Helmet>
			{loading && <Loading />}
			<BrowserRouter>
				{isLogged ? <PrivateRoutes /> : <PublicRoutes />}
			</BrowserRouter>
		</div>
	);
}

export default App;
