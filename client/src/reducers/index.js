import { combineReducers } from 'redux'
import userReducer from '../reducers/user-reducers'

export const rootReducer = combineReducers({
  user: userReducer,
})
