import styles from './cardtask.module.css';
import './card.css';

type reduceStr = {
	acc: string;
	curr: string;
	index: number;
};

const CardTask = ({ title, priority, status, description }: any) => {
	return (
		<article className={styles.cardTask}>
			<header className={styles.headerCard}>
				<h3>{title.length > 30 ? `${title.substring(0, 30)}...` : title}</h3>
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
