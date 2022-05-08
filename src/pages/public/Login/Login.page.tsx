import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './login.module.css';
import { googleAuth } from '../../../lib/auth/google.auth';

function Login() {
	return (
		<>
			<Helmet>
				<title>Sing In | Davtion Dev</title>
			</Helmet>
			<div className={styles.Login}>
				<h2 className={styles.titleSignIn}>Iniciar Sesión</h2>
				<div className={styles.providersLogin}>
					<button
						onClick={googleAuth}
						className={`${styles.provider} ${styles.providerGoogle || ''}`}>
						<img src='/google.png' alt='Google' />
						<p>
							continue with <span>Google</span>
						</p>
					</button>
				</div>
				<span className={styles.orLogin}> or</span>
				<form className={styles.formSignIn}>
					<label>
						<input type='text' placeholder='Name' required />
					</label>
					<label>
						<input type='text' placeholder='Mail' required />
					</label>
					<label>
						<input type='Password' required placeholder='Password' />
					</label>
					<button className='btnSingIn'>Sign IN</button>
				</form>
				<p className={styles.forgotPasswordLogin}>
					<span>dont have an accoutnt?</span>
					<Link to='/cuenta/registro'>Register</Link>
				</p>
				<p className={styles.forgotPasswordLogin}>
					<span>forgot password?</span>
					<Link to='/recuperar/contrasena'>Recover</Link>
				</p>
			</div>
			<div className={styles.bolSign}></div>
			<div className={styles.bolIn}></div>
		</>
	);
}

export default Login;
