const IconClose = ({ width, color }: any) => {
	return (
		<svg
			className='w-6 h-6'
			width={width}
			color={color}
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M6 18L18 6M6 6l12 12'></path>
		</svg>
	);
};

export default IconClose;
