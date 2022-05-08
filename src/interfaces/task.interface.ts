export interface tasksPropsInterface {
	title: string;
	description: string;
	status: 'in progress' | 'done' | 'not started';
	priority: 'low' | 'normal' | 'high';
	comments?: [];
}
