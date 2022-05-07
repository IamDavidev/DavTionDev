import { taskStateClient } from '../../../constants/client/state';
import { taskType } from '../../../interfaces/state.interface';
import { TaskMapper } from '../../../lib/mappers/task.mapper';

const FormModal = () => {
	const handleAddTask = (e: any) => {
		e.preventDefault();
		const task: taskType = TaskMapper(e.target);
		return taskStateClient({
			...taskStateClient,
			tasks: [...taskStateClient().tasks, task],
		});
	};

	return (
		<form onSubmit={handleAddTask}>
			<label>
				Title :
				<input type='text' placeholder='title' name='title' />
			</label>
			<label>
				description :
				<textarea cols={20} name='description' />
			</label>
			<label>
				status :
				<select name='status' id='status'>
					<option value='in-progress'>In Progress</option>
					<option value='done'>Done</option>
					<option value='not-started'>Not Started</option>
				</select>
			</label>
			<label>
				priority :
				<select name='priority' id='priority'>
					<option value='low'>Low</option>
					<option value='normal'>Normal</option>
					<option value='high'>High</option>
				</select>
			</label>
			<button type='submit'>Add Task</button>
		</form>
	);
};

export default FormModal;
