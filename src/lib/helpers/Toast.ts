import toast from 'react-hot-toast';

export const toastAddTask = () => {
	const resolver = new Promise(resolve => setTimeout(resolve, 1500));
	return toast.promise(
		resolver,
		{
			loading: 'Loading...',
			success: 'created',
			error: 'error',
		},
		{
			style: {
				backgroundColor: '#4a5570',
				color: ' #fff',
				fontWeight: 'bold',
			},
			success: {
				duration: 2000,
			},
		}
	);
};

export const toastInvalidTask = (invalid: string) => {
	return toast.error(`{ ${invalid} }`, {
		style: {
			backgroundColor: '#4a5570',
			color: '#fff',
			fontWeight: 'bold',
		},
	});
};
