import React from 'react'
import { connect } from 'react-redux'
import { Users } from '.'
import { Loader } from '../../common/preloader/loader'
import { getUsers } from '../../redux/reducers/usersPage-reducer'
import { setTotalUsersCount, follow, unFollow } from '../../redux/reducers/usersPage-reducer'
import {
  getUsersList,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/selectors/usersSelector'
import { compose } from 'redux'

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
  console.log('mapStateToProps USERS')
  return {
    users: getUsersList(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export const UsersContainer = compose(
  connect(mapStateToProps, {
    setTotalUsersCount,
    getUsers,
    follow,
    unFollow
  })
)(UsersAPIContainer)
