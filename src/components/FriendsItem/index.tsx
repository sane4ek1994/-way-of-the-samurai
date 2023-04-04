import styles from './friendsItem.module.css'

export type TFriends = {
  id: string
  src: string
  name: string
}

export const FriendsItem = (props: TFriends) => {
  return (
    <li className={styles.friends__item}>
      <div>
        <img src={props.src} alt={props.name} />
      </div>
      <div className={styles.friends__name}>{props.name}</div>
    </li>
  )
}
