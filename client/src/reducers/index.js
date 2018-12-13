import { combineReducers } from 'redux'
import usersReducer from '../reducers/users-reducers'

export const rootReducer = combineReducers({
  users: usersReducer,
})
