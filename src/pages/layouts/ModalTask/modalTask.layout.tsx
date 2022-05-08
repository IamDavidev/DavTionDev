import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconClose from '../../../components/icons/IconClose';
import FormModal from '../FormModal/FormModal.layout';
import styles from './modal.module.css';

const $ModalTask: any = document.getElementById('modal-task');

const ModalTask = ({ closeModal, modal }: any) => {
	const handleModal = () => {
		closeModal(!modal);
	};

	useEffect(() => {
		const body: any = document.querySelector('body');
		body.classList.add('modal-open-body');
		return () => {
			body.classList.remove('modal-open-body');
		};
	});

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
							Today {new Date().toLocaleDateString()}
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
