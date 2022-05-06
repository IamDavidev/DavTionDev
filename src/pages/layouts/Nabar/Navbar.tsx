import { useQuery } from '@apollo/client';

import { GET_USER } from '../../../gql/getUser.gql';
import styles from './navbar.module.css';

const Navbar = () => {
	const { data } = useQuery(GET_USER);
	return (
		<nav className={styles.navTask}>
			<div className={styles.userNav}>
				<img
					src={data.userDev.user.photoURL}
					srcSet={`${data.userDev.user.photoURL}`}
					alt={'i'}
				/>
				<span>{data.userDev.user.name}</span>
			</div>
			<span className={styles.email}>{data.userDev.user.email}</span>
		</nav>
	);
};

export default Navbar;
