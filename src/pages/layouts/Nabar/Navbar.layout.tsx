import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_USER } from '../../../gql/getUser.gql';
import styles from './navbar.module.css';

import userDefect from '/UserDefect.jpg';

const Navbar = () => {
	const { data } = useQuery(GET_USER);
	const { photoURL, name, email } = data.UserClient.user;
	return (
		<nav className={styles.navTask}>
			<Link
				to={`/profile/${name.replace(' ', '-')}`}
				className={styles.userNav}>
				<img src={photoURL || userDefect} alt={'i'} />
				<span>{name}</span>
			</Link>
			<span className={styles.email}>{email}</span>
		</nav>
	);
};

export default Navbar;
