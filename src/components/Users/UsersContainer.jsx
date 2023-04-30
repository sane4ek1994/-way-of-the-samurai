import React from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import { Users } from '.'
import { Loader } from '../../common/preloader/loader'

import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount
} from '../../redux/reducers/usersPage-reducer'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers([...response.data.items])
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = pageNumber => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        withCredentials: true
      })
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers([...response.data.items])
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
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
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
  }
}

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersAPIContainer)
