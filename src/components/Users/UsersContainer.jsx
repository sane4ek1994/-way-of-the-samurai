import React from 'react'
import { connect } from 'react-redux'

import { Users } from '.'
import { Loader } from '../../common/preloader/loader'
import { getUsers } from '../../redux/reducers/usersPage-reducer'

import { setCurrentPage, setTotalUsersCount, follow, unFollow } from '../../redux/reducers/usersPage-reducer'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageNumber, this.props.pageSize)
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
          followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress
  }
}

export const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  setTotalUsersCount,
  getUsers,
  follow,
  unFollow
})(UsersAPIContainer)
