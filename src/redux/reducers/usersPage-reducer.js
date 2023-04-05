const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: []
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
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unFollowAC = userId => ({ type: UN_FOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })
