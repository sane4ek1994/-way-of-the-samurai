import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { asideReducer, dialogsReducer, postReducer, usersReducer, authReducer } from './reducers'

const reducers = combineReducers({
  dialogsReducer,
  postReducer,
  asideReducer,
  usersReducer,
  authReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
