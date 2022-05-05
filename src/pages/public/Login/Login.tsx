import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './login.module.css';
import { googleAuth } from '../../../lib/auth/google.auth';
import { githubAuth } from '../../../lib/auth/github.auth';

function Login() {
	return (
		<>
			<Helmet>
				<title>iniciar sesión | Davtion Dev</title>
			</Helmet>
			<div className={styles.Login}>
				<h2 className={styles.titleSignIn}>Iniciar Sesión</h2>
				<div className={styles.providersLogin}>
					<button
						onClick={() => googleAuth()}
						className={`${styles.provider} ${styles.providerGoogle || ''}`}>
						<img src='/google.png' alt='Google' />
						<p>
							Continuar con <span>Google</span>
						</p>
					</button>
					<button
						onClick={githubAuth}
						className={`${styles.provider} ${styles.providerGithub || ''}`}>
						<img src='/github.png' alt='Github' />
						<p>
							Continuar con <span>Github</span>
						</p>
					</button>
					<button
						className={`${styles.provider} ${styles.provideTwitter || ''}`}>
						<img src='/twitter.png' alt='Twitter' />
						<p>
							Continuar con <span>Twitter</span>
						</p>
					</button>
				</div>
				<span className={styles.orLogin}> or</span>
				<form className={styles.formSignIn}>
					<label>
						<input type='text' placeholder='Nombre' required />
					</label>
					<label>
						<input type='text' placeholder='Email' required />
					</label>
					<label>
						<input type='Password' required placeholder='contraseña' />
					</label>
					<button className='btnSingIn'>Iniciar Sesión</button>
				</form>
				<p className={styles.forgotPasswordLogin}>
					<span>¿No tienes una cuenta?</span>
					<Link to='/cuenta/registro'>Registrate</Link>
				</p>
				<p className={styles.forgotPasswordLogin}>
					<span>¿Olvidaste tu contraseña?</span>
					<Link to='/recuperar/contrasena'>Recuperar</Link>
				</p>
			</div>
			<div className={styles.bolSign}></div>
			<div className={styles.bolIn}></div>
		</>
	);
}

export default Login;
