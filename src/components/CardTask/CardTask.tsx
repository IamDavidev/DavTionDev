import styles from './cardtask.module.css';
import './card.css';
import { tasksPropsInterface } from '../../interfaces/task.interface';
import { validateTitletAsk } from '../../validations/tasks.validation';

const CardTask = ({
	title,
	priority,
	status,
	description,
}: tasksPropsInterface) => {
	const titleValidated = validateTitletAsk(title);

	return (
		<article className={styles.cardTask}>
			<header className={styles.headerCard}>
				<h3>{titleValidated}</h3>
			</header>
			<div className={styles.contentCard}>
				<span>{description}</span>
			</div>
			<footer className={styles.footerCard}>
				<div>
					<button className={`Status__${status}`}>{status}</button>
					<button className={`Priority__${priority}`}>{priority}</button>
				</div>
			</footer>
		</article>
	);
};

export default CardTask;
