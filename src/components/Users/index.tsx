import axios from 'axios'

export const Users = (props: any) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://samyrai.free.beeceptor.com/users').then(response => {
        debugger
        props.setUsers([...response.data])
      })
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
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
