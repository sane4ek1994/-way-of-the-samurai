import { combineReducers, createStore } from 'redux'
import { asideReducer, dialogsReducer, postReducer, usersReducer, authReducer } from './reducers'

const reducers = combineReducers({
  dialogsReducer,
  postReducer,
  asideReducer,
  usersReducer,
  authReducer
})

export const store = createStore(reducers)
window.store = store
