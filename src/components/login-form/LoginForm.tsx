import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './LoginForm.module.css'

interface IFormState {
	login: string
	password: string
}

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormState>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IFormState> = data => {
		console.log('data', data)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h2>Вход</h2>
			<label htmlFor='login'>
				<input
					id='login'
					type='text'
					placeholder='Логин'
					className={styles.input}
					{...register('login', { required: 'Login in required' })}
					aria-invalid={errors.login ? 'true' : 'false'}
				/>
				{errors.login?.message && <small>{errors.login.message}</small>}
			</label>

			<label htmlFor='password'>
				<input
					id='password'
					type='password'
					placeholder='Пароль'
					className={styles.input}
					{...register('password', {
						required: 'Password in required',
					})}
					aria-invalid={errors.password ? 'true' : 'false'}
				/>
				{errors.password?.message && <small>{errors.password.message}</small>}
			</label>

			<button type='submit' className={styles.button}>
				Войти
			</button>
		</form>
	)
}

export default LoginForm
