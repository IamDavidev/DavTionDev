import { useQuery } from '@apollo/client';
import { FC, useState } from 'react';

import Navbar from '../../layouts/Nabar/Navbar.layout';
import CardTask from '../../../components/CardTask/CardTask';
import ModalTask from '../../layouts/ModalTask/modalTask.layout';
import { GET_TASKS } from '../../../gql/getTasks.gql';

const Tasks: FC = () => {
	const [modal, setModal] = useState(false);
	const { data } = useQuery(GET_TASKS);

	const Tasks = data.TasksClient.tasks;
	// task

	return (
		<div>
			<Navbar />
			<h1>Tasks</h1>
			<button onClick={() => setModal(!modal)}>Add Task</button>
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
			{modal && (
				<ModalTask>
					<button onClick={() => setModal(!modal)}>
						<span>Close</span>
					</button>
				</ModalTask>
			)}
		</div>
	);
};

export default Tasks;
