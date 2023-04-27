const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  userId: 2,
  email: 'blabla@bla.bla',
  login: 'samurai',
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      debugger
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
