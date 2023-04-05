import { combineReducers, createStore } from 'redux'
import { asideReducer, dialogsReducer, postReducer, usersReducer } from './reducers'

const reducers = combineReducers({
  dialogsReducer,
  postReducer,
  asideReducer,
  usersReducer
})

export const store = createStore(reducers)
