export const UserAuthMapper = (userObjectApi: any) => ({
	name: userObjectApi.displayName,
	email: userObjectApi.email,
	photoURL: userObjectApi.photoURL,
	_uid: userObjectApi.uid,
	token: userObjectApi.accessToken,
	isLoggedIn: true,
	lastLogin: userObjectApi.metadata.lastSignInTime,
});
