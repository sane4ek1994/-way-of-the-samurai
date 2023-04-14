import styles from './users.module.css'

export const Users = (props: any) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {pages.map((page: number) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(page)
              }}
              className={props.currentPage === page ? styles.page_active : undefined}
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
              <img src={user.avatarSrc} alt={user.fullName} />
            </div>
            <div>
              {user.isFollow ? (
                <button onClick={() => props.unFollow(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>Страна: {user.location.country}</div>
              <div>Город: {user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
