import { combineReducers } from 'redux'
import reducerAuthUser from './common/Auth/User/reducer'

export const rootReducer = combineReducers({
  user: reducerAuthUser,
})
