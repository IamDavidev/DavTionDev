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

export const taskInitialState: StateTaskInterface = {
	tasks: [],
	selectedTask: {},
};

export const userStateClient: ReactiveVar<StateUserInterface> =
	makeVar(userInitialState);

	
export const taskStateClient: ReactiveVar<StateTaskInterface> =
	makeVar(taskInitialState);
