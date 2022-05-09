import { v4 as uuid } from 'uuid';

export const TaskMapper = (ObjectTaskForm: any) => ({
	title: ObjectTaskForm.title.value,
	description: ObjectTaskForm.description.value,
	status: ObjectTaskForm.status.value,
	priority: ObjectTaskForm.priority.value,
	finishedAt: ObjectTaskForm.finishedAt.value || 0,
	createdAt: new Date().toLocaleDateString(),
	_uid: uuid(),
});
0;
