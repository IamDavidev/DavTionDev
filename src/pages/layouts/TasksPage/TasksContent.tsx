import { useQuery } from '@apollo/client';
import { useState } from 'react';
import CardTask from '../../../components/CardTask/CardTask';
import { GET_TASKS } from '../../../gql/getTasks.gql';
import styles from './tasks.module.css';
function TasksContent() {
	console.log('> TasksContent');

	const { data } = useQuery(GET_TASKS);

	const Tasks = data.TasksClient.tasks;
	return (
		<>
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
		</>
	);
}

export default TasksContent;
