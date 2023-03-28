import { combineReducers, createStore } from 'redux'
import { asideReducer, dialogsReducer, postReducer } from './reducers'

const reducers = combineReducers({
  dialogsReducer,
  postReducer,
  asideReducer
})

export const store = createStore(reducers)
