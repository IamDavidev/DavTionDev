import { makeVar, ReactiveVar } from '@apollo/client';
import {
	StateTaskInterface,
	StateUserInterface,
} from '../../interfaces/state.interface';

export const userInitialState: StateUserInterface = {
	isAuthenticated: false,
	user: {
		id: '',
		_uid: '',
		name: '',
		email: '',
		photoURL: '',
		_token: '',
		isLoggedIn: false,
		lastLogin: '',
	},
};

export const taskInitialState: any = {
	tasks: [],
	selectedTask: {},
};

export const userStateClient = makeVar(userInitialState);
export const taskStateClient = makeVar(taskInitialState);
