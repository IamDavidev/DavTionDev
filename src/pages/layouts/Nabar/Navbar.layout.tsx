import { useQuery } from '@apollo/client';

import { GET_USER } from '../../../gql/getUser.gql';
import styles from './navbar.module.css';

const Navbar = () => {
	const { data } = useQuery(GET_USER);
	const { photoURL, name, email } = data.UserClient.user;
	return (
		<nav className={styles.navTask}>
			<div className={styles.userNav}>
				<img src={photoURL} alt={'i'} />
				<span>{name}</span>
			</div>
			<span className={styles.email}>{email}</span>
		</nav>
	);
};

export default Navbar;
