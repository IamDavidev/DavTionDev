import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { googleProvider } from '../providers/firebase.providers';
import { authFirebase } from '../../config/firebase.config';

export const googleAuth = (_setUser?: any) => {
	signInWithPopup(authFirebase, googleProvider)
		.then(response => {
			const { displayName, uid, email, photoURL, metadata } = response.user;
			const credential = GoogleAuthProvider.credentialFromResult(response);
			const token = credential?.accessToken;
			const userLogged = {
				name: displayName,
				email,
				photoURL,
				uid,
				token,
				isLoggedIn: true,
				lastLogin: metadata.lastSignInTime,
			};
			return _setUser();
			console.log('Token', token);
		})
		.catch(err => {
			//
			console.log('googleAuth', err);
		});
};
