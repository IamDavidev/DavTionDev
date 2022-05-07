import { taskStateClient } from '../../constants/client/state';
import { taskType } from '../../interfaces/state.interface';
import { toastAddTask } from '../helpers/Toast';
import { TaskMapper } from '../mappers/task.mapper';

export const AddTask = (e: any) => {
	e.preventDefault();
	const task: taskType = TaskMapper(e.target);
	toastAddTask();
	return setTimeout(() => {
		taskStateClient({
			...taskStateClient,
			tasks: [...taskStateClient().tasks, task],
		});
	}, 1800);
};
