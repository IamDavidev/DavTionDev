import { FirebaseApp, initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

import {
	API_KEY,
	APP_ID,
	AUTH_DOMAIN,
	MEASUREMENT_ID,
	MESSAGING_SENDER_ID,
	PROJECT_ID,
	STORAGE_BUCKET,
} from '../constants/firebase/firebase';
import { Auth, getAuth } from 'firebase/auth';
import { firebaseConfigInterface } from '../interfaces/firebase.interface';

export const firebaseconfig: firebaseConfigInterface = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASUREMENT_ID,
};

export const appFirebase: FirebaseApp = initializeApp(firebaseconfig);

export const authFirebase: Auth = getAuth();

// export const analytics = getAnalytics(appFirebase);
// no funcion si tiene bloqueo de anucios
