import { NavLink } from 'react-router-dom'
import userAvatar from '../../assets/images/user_default.png'

import styles from './users.module.css'
import { userAPI } from '../../api/api'

export const Users = (props: any) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const isUnfollow = (id: any) => {
    userAPI.unFollowUser(id).then(resultCode => {
      if (resultCode === 0) {
        props.unFollow(id)
      }
    })
  }

  const isFollow = (id: any) => {
    userAPI.followUser(id).then(resultCode => {
      if (resultCode === 0) {
        props.follow(id)
      }
    })
  }
  return (
    <div>
      <div className={styles.page_wrapper}>
        {pages.map((page: number) => {
          return (
            <span
              className={props.currentPage === page ? styles.page_active : styles.page}
              onClick={() => {
                props.onPageChanged(page)
              }}
            >
              {page}
            </span>
          )
        })}
      </div>
      {props.users.map((user: any) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  className={styles.img_avatar}
                  src={user.photos.small != null ? user.photos.small : userAvatar}
                  alt={user.name}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => isUnfollow(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => isFollow(user.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>Страна: {'user.location.country'}</div>
              <div>Город: {'user.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
