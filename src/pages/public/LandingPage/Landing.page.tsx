import { Link } from 'react-router-dom';
const Lading = () => {
	console.log('~~landing');
	return (
		<div>
			<h1>Lading</h1>
			<Link to='/iniciar/sesion'>iniciar sesión</Link>
		</div>
	);
};

export default Lading;
