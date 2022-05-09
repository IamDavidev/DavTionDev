import { taskStateClient } from '../../constants/client/state';
import { taskType } from '../../interfaces/state.interface';
import { isValidFormatTask } from '../../validations/tasks.validation';
import { toastInvalidTask, toastAddTask } from '../helpers/Toast';
import { TaskMapper } from '../mappers/task.mapper';

export const AddTask = (e: any) => {
	e.preventDefault();
	const task: taskType = TaskMapper(e.target);
	console.log('>> task', task);
	const isTaskValid = isValidFormatTask(task);
	console.log('>> isTaskValid', isTaskValid);

	if (!isTaskValid.isValid) return toastInvalidTask(isTaskValid.message);

	toastAddTask();

	return setTimeout(() => {
		taskStateClient({
			...taskStateClient,
			tasks: [...taskStateClient().tasks, task],
		});
	}, 1800);
};
