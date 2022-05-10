import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { authFirebase } from '../../config/firebase.config';
import { userStateClient } from '../../constants/client/client.state';
import { _EXISTING_EMAIL } from '../../constants/firebase/firebase.err';
import { userStateType } from '../../interfaces/state.interface';
import { GithubProvider } from '../providers/firebase.providers';

export const githubAuth = () => {
	signInWithPopup(authFirebase, GithubProvider)
		.then(response => {
			const credential = GithubAuthProvider.credentialFromResult(response);
			const { displayName, uid, email, photoURL, metadata } = response.user;
			const token = credential?.accessToken;

			const user: userStateType = {
				name: displayName,
				email,
				photoURL,
				_uid: uid,
				_token: token,
				isLoggedIn: true,
				lastLogin: metadata.lastSignInTime,
			};

			return userStateClient({
				isAuthenticated: true,
				user,
			});
		})
		.catch(function (error) {});
};
