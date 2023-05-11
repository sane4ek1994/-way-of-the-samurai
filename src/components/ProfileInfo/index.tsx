import { Loader } from '../../common/preloader/loader'
import { ProfileStatus } from './ProfileStatus'
import userAvatar from '../../assets/images/user_default.png'

import styles from './profileInfo.module.css'

export const ProfileInfo = (props: any) => {
  if (!props.profile) {
    return <Loader />
  }
  return (
    <div className={styles.about}>
      <div className='avatar_box'>
        <img
          className={styles.avatar}
          src={props.profile.photos.small != null ? props.profile.photos.small : userAvatar}
          alt={props.profile.fullName}
        />
        <ProfileStatus updateUserStatus={props.updateUserStatus} status={props.status} />
      </div>
      <div className={styles.info}>
        <div className='name'>Name: {props.profile.fullName}</div>
        <div className='age'> Age: 28</div>
        <p className={styles.descr}>About me: {props.profile.aboutMe}</p>
        <div className={styles.social}>Social: {props.profile.contacts.github}</div>
      </div>
    </div>
  )
}
