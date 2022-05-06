import styles from './cardtask.module.css';
import './card.css';

const CardTask = ({ title, priority, status, description }: any) => {
	return (
		<article className={styles.cardTask}>
			<header className={styles.headerCard}>
				<h3>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</h3>
			</header>
			<div className={styles.contentCard}>
				<p className={styles.textContent}>{description}</p>
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
