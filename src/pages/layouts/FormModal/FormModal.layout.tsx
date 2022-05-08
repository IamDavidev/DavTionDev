import { AddTask } from '../../../lib/api/Task.api';
import styles from './formModal.module.css';

const FormModal = () => {
	return (
		<form onSubmit={e => AddTask(e)} className={styles.formModal}>
			<label>
				<span>Title</span>
				<input type='text' name='title' className={styles.taskTitle} />
			</label>
			<label>
				description :
				<textarea
					cols={20}
					name='description'
					className={styles.taskDescription}
				/>
			</label>
			<div className={styles.taskOptions}>
				<label>
					status :
					<select name='status' id='status' className={styles.taskStatus}>
						<option value='in progress'>In Progress</option>
						<option value='done'>Done</option>
						<option value='not started'>Not Started</option>
					</select>
				</label>
				<label>
					priority :
					<select name='priority' id='priority' className={styles.taskPriority}>
						<option value='low'>Low</option>
						<option value='normal'>Normal</option>
						<option value='high'>High</option>
					</select>
				</label>
			</div>
			<label className={styles.contentFinish}>
				finish date (optional) :
				<input type='date' name='finishedAt' className={styles.taskFinish} />
			</label>
			<button type='submit' className={styles.btnAddTask}>
				Add Task
			</button>
		</form>
	);
};

export default FormModal;
