import Navigation from '../navigation/Navigation'
import styles from './Sidebar.module.css'

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className={styles.logo}>
				Admin<span style={{ color: '#209ae5' }}>DASH</span>
			</div>
			<Navigation />
		</div>
	)
}
