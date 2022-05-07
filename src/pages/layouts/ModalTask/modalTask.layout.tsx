import { createPortal } from 'react-dom';
import IconClose from '../../../components/icons/IconClose';
import FormModal from '../FormModal/FormModal.layout';
import styles from './modal.module.css';

const $ModalTask: any = document.getElementById('modal-task');

const ModalTask = ({ closeModal, modal }: any) => {
	const handleModal = () => {
		closeModal(!modal);
	};
	return createPortal(
		<>
			<div className={styles.modalTask}>
				<div className={styles.contentModal}>
					<button onClick={handleModal} className={styles.btnCloseModal}>
						<IconClose width={30} color={'#fff'} />
					</button>
					<header>
						<h2>Add Task</h2>
						<span className={styles.dateToday}>
							{new Date().toLocaleDateString()}
						</span>
					</header>
					<FormModal />
				</div>
			</div>
		</>,
		$ModalTask
	);
};

export default ModalTask;
