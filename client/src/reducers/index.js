import { combineReducers } from 'redux'
import { default as user } from '../reducers/user-reducer'

export const rootReducer = combineReducers({
	user,
})
