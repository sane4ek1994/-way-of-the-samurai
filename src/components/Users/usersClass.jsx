import React from 'react'
import axios from 'axios'

export class Users extends React.Component {
  constructor(props) {
    super(props)
    axios.get('https://samyrai.free.beeceptor.com/users').then(response => {
      props.setUsers([...response.data.users])
    })
  }

  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div key={user.id}>
            <span>
              <div>
                <img src={user.avatarSrc} alt={user.fullName} />
              </div>
              <div>
                {user.isFollow ? (
                  <button onClick={() => this.props.unFollow(user.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>Follow</button>
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
}
