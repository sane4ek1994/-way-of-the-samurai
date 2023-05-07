import { userAPI } from '../../api/api'

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
  followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

const followSuccess = userId => ({ type: FOLLOW, userId })
const unFollowSuccess = userId => ({ type: UN_FOLLOW, userId })
const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
const toggleIsFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId
})
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export const getUsers = (pageNumber, pageSize) => dispatch => {
  dispatch(toggleIsFetching(true))

  userAPI.getUsers(pageNumber, pageSize).then(response => {
    dispatch(toggleIsFetching(false))
    dispatch(setUsers([...response.data.items]))
    dispatch(setTotalUsersCount(response.data.totalCount))
  })
}

export const follow = id => dispatch => {
  dispatch(toggleIsFollowingInProgress(true, id))
  userAPI.followUser(id).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(id))
    }
    dispatch(toggleIsFollowingInProgress(false, id))
  })
}

export const unFollow = id => dispatch => {
  dispatch(toggleIsFollowingInProgress(true, id))
  userAPI.unFollowUser(id).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(unFollowSuccess(id))
    }
    dispatch(toggleIsFollowingInProgress(false, id))
  })
}
