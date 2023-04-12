const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 4
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
    default:
      return state
  }
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unFollowAC = userId => ({ type: UN_FOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
