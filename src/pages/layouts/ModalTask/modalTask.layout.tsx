import { createPortal } from 'react-dom';
import FormModal from '../FormModal/FormModal.layout';
import styles from './modal.module.css';

const $ModalTask: any = document.getElementById('modal-task');

const ModalTask = ({ children }: any) => {
	return createPortal(
		<div className={styles.modalTask}>
			<div className={styles.contentModal}>
				<header>
					<h2>Add Task</h2>
					<span className={styles.dateToday}>
						{new Date().toLocaleDateString()}
					</span>
				</header>
				<FormModal />
				{children}
			</div>
		</div>,
		$ModalTask
	);
};

export default ModalTask;
