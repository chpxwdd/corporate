import { combineReducers } from 'redux'
import errorReducer from '../reducers/error-reducer'
import authReducer from '../reducers/auth-reducer'
import usersReducer from '../reducers/users-reducers'

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  error: errorReducer,
})
