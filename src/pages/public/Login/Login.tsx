import { Helmet } from 'react-helmet';
import styles from './login.module.css';

function Login() {
	return (
		<>
			<Helmet>
				<title>iniciar sesión | Davtion Dev</title>
			</Helmet>
			<div className={styles.Login}>
				<h2 className={styles.titleSignIn}>Iniciar Sesión</h2>
				<div className={styles.providersLogin}>
					<div className={`${styles.provider} ${styles.providerGoogle}`}>
						<img src='/google.png' alt='Google' />
						<a href='#'>
							Continuar con <span>Google</span>
						</a>
					</div>
					<div className={`${styles.provider} ${styles.providerGithub}`}>
						<img src='/github.png' alt='Github' />
						<a href='#'>
							Continuar con <span>Github</span>
						</a>
					</div>
					<div className={`${styles.provider} ${styles.provideLinkedin}`}>
						<img src='/linkedin.png' alt='Linkedin' />
						<a href='#'>
							Continuar con <span>Linkedin</span>
						</a>
					</div>
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
				<p className='registerLogin'>
					<span>¿No tienes una cuenta?</span>
					<a href='#'>Registrate</a>
				</p>
				<p className='forgotPasswordLogin'>
					<span>¿Olvidaste tu contraseña?</span>
					<a href='#'>Recuperar</a>
				</p>
			</div>
			<div className={styles.bolSign}></div>
			<div className={styles.bolIn}></div>
		</>
	);
}

export default Login;
