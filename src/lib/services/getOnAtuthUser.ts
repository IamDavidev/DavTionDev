import { onAuthStateChanged } from 'firebase/auth';
import {} from 'react';
import { authFirebase } from '../../config/firebase.config';
import { userStateClient } from '../../constants/client/state';
import { userStateType } from '../../interfaces/state.interface';

export function getOnAuthUser({ setLoading, setIsLoggedIn }: any) {
	onAuthStateChanged(authFirebase, (user: any) => {
		if (!user) return setLoading(false);

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

		setTimeout(() => {
			setIsLoggedIn(true);
			setLoading(false);
		}, 1000);

		return userStateClient({
			...userStateClient,
			isAuthenticated: true,
			user: userOnAtuth,
		});
	});
}
