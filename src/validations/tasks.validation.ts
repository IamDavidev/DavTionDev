import { taskType } from '../interfaces/state.interface';

export const validateTitletAsk = (title: string): string => {
	// validate title
	if (title.length > 30) return title.substring(0, 30) + ' ..}';

	return title;
};

type returnIsValidTask = {
	isValid: boolean;
	message: string;
};
const formatNoValidTask = (i: string) => {
	return {
		isValid: false,
		message: `is not valid ${i}`,
	};
};

export const isValidFormatTask = (task: taskType): returnIsValidTask => {
	if (!task.title) return formatNoValidTask('title');
	if (!task.description) return formatNoValidTask('description');

	const finishedAt = new Date(task.finishedAt);
	const createdAt = new Date();

	if (createdAt > finishedAt) return formatNoValidTask('finishedAt');
	return {
		isValid: true,
		message: '',
	};
};
