import { NavLink } from 'react-router-dom'
import { AsideBar } from '../AsideBar'

import styles from './navbar.module.css'

export const Navbar = (props: any) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list__item}>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : styles.nav_list__link)}>
            Profile
          </NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink to='/users' className={({ isActive }) => (isActive ? styles.active : styles.nav_list__link)}>
            Friends users
          </NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink to='/messages' className={({ isActive }) => (isActive ? styles.active : styles.nav_list__link)}>
            Messages
          </NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink to='/news' className={({ isActive }) => (isActive ? styles.active : styles.nav_list__link)}>
            News
          </NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink to='/music' className={({ isActive }) => (isActive ? styles.active : styles.nav_list__link)}>
            Music
          </NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink to='/settings' className={({ isActive }) => (isActive ? styles.active : styles.nav_list__link)}>
            Settings
          </NavLink>
        </li>
      </ul>
      <AsideBar friendsData={props.friendsData} />
    </nav>
  )
}
