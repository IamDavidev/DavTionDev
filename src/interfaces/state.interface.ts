export interface StateUserInterface {
	user: userStateType;
	isAuthenticated: boolean;
}

export type userStateType = {
	id?: string | null;
	_uid: string | null;
	name: string | null;
	email: string | null;
	photoURL: string | null;
	date?: Date | null;
	_token?: string | undefined;
	isLoggedIn: boolean;
	lastLogin: string | undefined;
};

export interface StateTaskInterface {
	tasks: Array<taskType>;
}

export type taskType = {
	_uid: string | null;
	title: string;
	createdAt: string;
	finishedAt?: string | null;
	description: string;
	status: 'in progress' | 'done' | 'not started';
	priority: 'low' | 'normal' | 'high';
	comments?: [];
};
