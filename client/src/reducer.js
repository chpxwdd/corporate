import { combineReducers } from 'redux'
import reducerUser from './features/user/reducer'

export const rootReducer = combineReducers({
  user: reducerUser,
})
