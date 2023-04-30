import React from 'react'

import styles from './header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = (props: any) => {
  return (
    <header className={styles.header}>
      <NavLink to='/'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DuUXG2ue_bB3rkt_3mFVm_ofkL1jyq_tRw&usqp=CAU'
          alt='logo'
        />
      </NavLink>
      <NavLink to='/login' className={styles.login}>
        {props.isAuth ? props.login : 'Login in'}
      </NavLink>
    </header>
  )
}
