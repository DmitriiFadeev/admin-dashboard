import { NavLink } from 'react-router-dom'

import IconCalendar from '../icons/IconCalendar'
import IconCharts from '../icons/IconCharts'
import IconDashboard from '../icons/IconDashboard'
import IconEmail from '../icons/IconEmail'
import IconForms from '../icons/IconForms'
import IconMaps from '../icons/IconMaps'
import IconPages from '../icons/IconPages'
import IconProfile from '../icons/IconProfile'
import IconTable from '../icons/IconTable'
import IconUi from '../icons/IconUi'
import styles from './Navigation.module.css'

const menu = [
	{
		id: 1,
		icon: IconDashboard,
		name: 'Dashboard',
		link: '/',
	},
	{
		id: 2,
		icon: IconUi,
		name: 'UI Kit',
		link: '/ui',
	},
	{
		id: 3,
		icon: IconEmail,
		name: 'Emails',
		link: '/emails',
	},
	{
		id: 4,
		icon: IconCharts,
		name: 'Charts',
		link: '/charts',
	},
	{
		id: 5,
		icon: IconTable,
		name: 'Table',
		link: '/table',
	},
	{
		id: 6,
		icon: IconForms,
		name: 'Forms',
		link: '/forms',
	},
	{
		id: 7,
		icon: IconCalendar,
		name: 'Calendar',
		link: '/calendar',
	},
	{
		id: 8,
		icon: IconPages,
		name: 'Pages',
		link: '/pages',
	},
	{
		id: 9,
		icon: IconMaps,
		name: 'Maps',
		link: '/maps',
	},
	{
		id: 10,
		icon: IconProfile,
		name: 'My Profile',
		link: '/profile',
	},
]

const Navigation = () => {
	return (
		<nav>
			<ul className={styles.list}>
				{menu.map(m => (
					<li key={m.id}>
						<NavLink
							to={m.link}
							className={({ isActive }) =>
								isActive ? `${styles.link}` + ' active' : `${styles.link}`
							}
						>
							<m.icon />
							{m.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
