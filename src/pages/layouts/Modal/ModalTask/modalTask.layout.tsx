import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconClose from '../../../../components/icons/Close.icon';
import { cache } from '../../../../config/Apollo.client.config';
import { davtionStateClient } from '../../../../constants/client/client.state';
import { GET_DAVTION_STATE } from '../../../../gql/getDavtionState';
import FormModal from '../FormModal/FormModal.layout';
import styles from './modal.module.css';

const $ModalTask: any = document.getElementById('modal-task');

const ModalTask = () => {
	const handleModal = () => {
		cache.writeQuery({
			query: GET_DAVTION_STATE,
			data: {
				davtionState: {
					modalTask: false,
					isAuthenticated: davtionStateClient().isAuthenticated,
				},
			},
		});
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
