import { ReactNode } from 'react'
import styles from './LoginLayout.module.css'

interface Props {
	children?: ReactNode
}

const LoginLayout = ({ children }: Props) => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.content}>{children}</div>
			</div>
		</main>
	)
}

export default LoginLayout
