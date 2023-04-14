const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 4,
  isFetching: false
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, isFollow: true }
          }
          return user
        })
      }
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, isFollow: false }
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unFollowAC = userId => ({ type: UN_FOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetchingAC = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
