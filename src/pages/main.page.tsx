// @flow
import { useQuery } from '@apollo/client';
import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from '../components/LoadingDavtion/Loading.layout';
import LoadingLazy from '../components/LoadingLazy/LoadingLazy';
import { GET_DAVTION_STATE } from '../gql/getDavtionState';
import { getOnAuthUser } from '../lib/auth/getOnAtuthUser';
import PrivateRoutes from '../routes/Private.routes';
import PublicRoutes from '../routes/Public.routes';

function MainPage() {
	const [loading, setLoading] = useState(true);

	const { data } = useQuery(GET_DAVTION_STATE);
	const { isAuthenticated } = data.davtionState;

	useEffect(() => {
		getOnAuthUser({ setLoading });
	});
	console.log(loading);

	return (
		<main>
			{loading ? (
				<Loading />
			) : (
				<Suspense fallback={<LoadingLazy />}>
					<BrowserRouter>
						{isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
					</BrowserRouter>
				</Suspense>
			)}
		</main>
	);
}

export default MainPage;
