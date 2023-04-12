import React from 'react'
import axios from 'axios'

import styles from './users.module.css'
export class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://samyrai.free.beeceptor.com/users/${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers([...response.data.users])
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://samyrai.free.beeceptor.com/users/${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers([...response.data.users])
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(page => {
            return (
              <span
                onClick={() => {
                  this.onPageChanged(page)
                }}
                className={this.props.currentPage === page && styles.page_active}
              >
                {page}
              </span>
            )
          })}
        </div>
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
