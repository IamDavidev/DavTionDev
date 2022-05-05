import {
	GithubAuthProvider,
	signInWithPopup,
	fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { authFirebase } from '../../config/firebase.config';
import { _EXISTING_EMAIL } from '../../constants/errors/firebase.err';
import { GithubProvider } from '../providers/firebase.providers';

export const githubAuth = () => {
	signInWithPopup(authFirebase, GithubProvider)
		.then(response => {
			const credential = GithubAuthProvider.credentialFromResult(response);
			const user = response.user;
			console.log('> user > ', user);
			console.log('> credential > ', credential);
		})
		.catch(err => {
			console.log('githubAuth', err);
			const errorCode = err.code;
			const errorMessage = err.message;
			const email = err.email;
			const credential = GithubAuthProvider.credentialFromResult(err);

			if (errorCode === _EXISTING_EMAIL)
				fetchSignInMethodsForEmail(authFirebase, email);

			console.log('> errorCode > ', errorCode);
			console.log('> errorMessage > ', errorMessage);
			console.log('> email > ', email);
			console.log('> credential > ', credential);
		});
};
