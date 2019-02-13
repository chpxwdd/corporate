import { combineReducers } from 'redux'
import reducerAuth from './features/auth/reducer'

export const rootReducer = combineReducers({
  auth: reducerAuth,
})
