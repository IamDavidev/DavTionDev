import styles from './loading.module.css';
import { Jelly } from '@uiball/loaders';

const Loading = () => {
	return (
		<div className={styles.Loading}>
			<h2>Davtion Dev</h2>
			<Jelly size={125} color={'#d63691'} speed={1} />
		</div>
	);
};

export default Loading;
