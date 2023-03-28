import React from 'react'

import styles from './profileImage.module.css'

export const ProfileImage = () => {
  return (
    <div className='profile_img__box'>
      <img
        className={styles.profile_image}
        src='https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0='
        alt=''
      />
    </div>
  )
}
