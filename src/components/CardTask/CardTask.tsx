import styles from './cardtask.module.css';
import './card.css';

type reduceStr = {
	acc: string;
	curr: string;
	index: number;
};

const CardTask = ({ title, priority, status, description }: any) => {
	{
		/* agregar saltos de linea cada veinte palabras */
	}
	const descriptionSplit = description
		.split(' ')
		.reduce((acc: string, curr: string, index: number) => {
			if (index % 20 === 0) {
				acc += `${curr} \n`;
			} else {
				acc += `${curr} `;
			}
			return acc;
		});

	return (
		<article className={styles.cardTask}>
			<header className={styles.headerCard}>
				<h3>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</h3>
			</header>
			<div className={styles.contentCard}>
				<span>{descriptionSplit}</span>
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
