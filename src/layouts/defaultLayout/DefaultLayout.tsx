import { ReactNode } from 'react'
import TheFooter from '../../components/footer/TheFooter.tsx'
import Sidebar from '../../components/sidebar/Sidebar.tsx'
import TheHeader from '../../components/TheHeader.tsx'

import styles from './DefaultLayout.module.css'

interface Props {
	children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<div className={styles.inner}>
				<TheHeader />
				<div className={styles.container}>
					<div className={styles.content}>{children}</div>
				</div>
				<TheFooter />
			</div>
		</main>
	)
}

export default DefaultLayout
