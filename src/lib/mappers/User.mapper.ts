export const UserAuthMapper = (userObjectApi: any) => ({
	name: userObjectApi.displayName,
	email: userObjectApi.email,
	photoURL: userObjectApi.photoURL,
	_uid: userObjectApi.uid,
	token: userObjectApi.accessToken,
	isLoggedIn: true,
	lastLogin: userObjectApi.metadata.lastSignInTime,
});

export const UserLocalMapper = (userObjectLocal: any) => ({
	name: userObjectLocal.UserClient.user.name,
	email: userObjectLocal.UserClient.user.email,
	image: userObjectLocal.UserClient.user.photoURL,
	_token: userObjectLocal.UserClient.user._token,
	isLoggedIn: userObjectLocal.UserClient.isAuthenticated,
});
