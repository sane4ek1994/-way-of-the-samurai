import { NavLink } from 'react-router-dom'
import styles from '../messages.module.css'

export type TDialogItem = {
  id: string
  name: string
  src: string
}

export const DialogItem = (props: TDialogItem) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <img className={styles.dialog__avatar} src={props.src} alt={props.name} />
      <NavLink to={props.id}>{props.name}</NavLink>
    </div>
  )
}
