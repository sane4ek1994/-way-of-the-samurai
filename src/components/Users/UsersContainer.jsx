import React from 'react'
import { connect } from 'react-redux'

import { userAPI } from '../../api/api'
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
    userAPI.getUsers(this.props.pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers([...data.items])
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = pageNumber => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers([...data.items])
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
