import React from 'react'

import styles from './profileInfo.module.css'

export const ProfileInfo = (props: any) => {
  if (!props.profile) {
    return <div>Нет данных!</div>
  }
  return (
    <div className={styles.about}>
      <div className='avatar_box'>
        <img className={styles.avatar} src={props.profile.photos.large} alt='' />
      </div>
      <div className={styles.info}>
        <div className='name'>Name: Alex</div>
        <div className='age'> Age: 28</div>
        <p className={styles.descr}>About me: Hello I`m Alex</p>
      </div>
    </div>
  )
}
