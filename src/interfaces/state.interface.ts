export interface StateUserInterface {
	user: userStateType;
	isAuthenticated: boolean;
}

export type userStateType = {
	id: string;
	_uid: string;
	name: string;
	email: string;
	photoURL: string;
	_token: string;
	isLoggedIn: boolean;
	lastLogin: string;
};

export interface StateTaskInterface {
	tasks: Array<taskType>;
}

export type taskType = {
	title: string;
	createdAt: string;
	description: string;
	status?: 'in progress' | 'done' | 'not started';
	priority?: 'low' | 'normal' | 'high';
	comments?: [];
};
