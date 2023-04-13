import React from 'react'
import axios from 'axios'
import { Users } from '.'

export class UsersAPIComponent extends React.Component {
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
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        pages={this.pages}
      />
    )
  }
}
