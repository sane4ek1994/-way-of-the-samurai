import { FriendsItem } from '../../components'
import { TFriends } from '../FriendsItem'

import styles from './asideBar.module.css'

export const AsideBar = (props: { friendsData: TFriends[] }) => {
  return (
    <>
      <h3 className={styles.friends__title}>Friends</h3>
      <ul className={styles.friends__list}>
        {props.friendsData.map(friend => (
          <FriendsItem key={friend.id} src={friend.src} name={friend.name} id={''} />
        ))}
      </ul>
    </>
  )
}
