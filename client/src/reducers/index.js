import { combineReducers } from 'redux'
import reducerAuthUser from '../reducers/auth.user'
import reducerAaclRole from '../reducers/acl.role'

export const rootReducer = combineReducers({
  user: reducerAuthUser,
  role: reducerAaclRole,
})
