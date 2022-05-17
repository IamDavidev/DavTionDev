import { IconTask } from '../../../components/icons/task.icon';
import styles from './tasks.module.css';
export function TasksHeader() {
	console.log('>> TasksHeader');
	return (
		<>
			<header className={styles.headerTasks}>
				<div className={styles.titleTask}>
					<h1>Tasks</h1>
					<IconTask width={30} color='#d63691' />
				</div>
			</header>
		</>
	);
}
