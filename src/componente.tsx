type Props = {
	title: string;
	bio: string;
	priority: 'low' | 'normal' | 'high';
	comments?: [];
	status?: 'progress' | 'done';
};

export const Component = (props: Props) => {
	const { title, bio, priority, status } = props;
	return (
		<div className='cardNote'>
			<button className='btnTodo'>dodo type in low</button>
			<h1>{title}</h1>
			<p>{bio}</p>
			<button className='NotePriority'>
				<span>{priority}</span>
			</button>
			<button className='NoteStatus'>
				<span>{status}</span>
			</button>
		</div>
	);
};
