// import { Users } from '.'
import { UsersAPIComponent } from './usersApiComponent'
import { connect } from 'react-redux'
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurrentPageAC,
  toggleIsFetchingAC
} from '../../redux/reducers/usersPage-reducer'

const mapStateToProps = (state: any) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    follow: (userId: string) => dispatch(followAC(userId)),
    unFollow: (userId: string) => dispatch(unFollowAC(userId)),
    setUsers: (users: any) => dispatch(setUsersAC(users)),
    setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
    toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching))
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
