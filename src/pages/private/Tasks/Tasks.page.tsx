import { useQuery } from '@apollo/client';
import { FC, useState } from 'react';

import styles from './task.module.css';

import Navbar from '../../layouts/Nabar/Navbar.layout';
import CardTask from '../../../components/CardTask/CardTask';
import ModalTask from '../../layouts/ModalTask/modalTask.layout';
import { GET_TASKS } from '../../../gql/getTasks.gql';
import IconOpen from '../../../components/icons/IconOpen';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { IconTask } from '../../../components/icons/IconTask';

const Tasks: FC = () => {
	console.log('~~tasks');
	const [modal, setModal] = useState(false);
	const { data } = useQuery(GET_TASKS);

	const Tasks = data.TasksClient.tasks;
	// task

	return (
		<>
			<Helmet>
				<title>tasks | Davtion Dev</title>
			</Helmet>
			<Navbar />
			<div className={styles.tasks}>
				<header className={styles.headerTasks}>
					<div className={styles.titleTask}>
						<h1>Tasks</h1>
						<IconTask width={30} color='#d63691' />
					</div>
					<button
						onClick={() => setModal(!modal)}
						className={styles.btnAddTask}>
						<IconOpen width={30} color={'#df3691'} />
						<span>Add Task</span>
					</button>
				</header>
				<section className={styles.containertasks}>
					{Tasks &&
						Tasks.map((task: any) => {
							return (
								<CardTask
									priority={task.priority}
									status={task.status}
									description={task.description}
									title={task.title}
									key={task._uid}
								/>
							);
						})}
				</section>
				<footer>
					<Toaster position='bottom-left' containerClassName={styles.toast} />
				</footer>
				{modal && <ModalTask closeModal={setModal} modal={modal} />}
			</div>
		</>
	);
};

export default Tasks;
