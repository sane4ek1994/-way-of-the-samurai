// import { Users } from '.'
import { Users } from './usersClass'
import { connect } from 'react-redux'
import { followAC, unFollowAC, setUsersAC } from '../../redux/reducers/usersPage-reducer'

const mapStateToProps = (state: any) => {
  return {
    users: state.usersReducer.users
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    follow: (userId: string) => dispatch(followAC(userId)),
    unFollow: (userId: string) => dispatch(unFollowAC(userId)),
    setUsers: (users: any) => dispatch(setUsersAC(users))
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
