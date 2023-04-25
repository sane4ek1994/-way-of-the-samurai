import React from 'react'

import styles from './profileInfo.module.css'

export const ProfileInfo = (props: any) => {
  if (!props.profile) {
    return <div>Нет данных!</div>
  }
  return (
    <div className={styles.about}>
      <div className='avatar_box'>
        <img className={styles.avatar} src={props.profile.photos.large} alt={props.profile.fullName} />
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
