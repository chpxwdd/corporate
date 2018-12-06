import { combineReducers } from 'redux'
import errorReducer from '../reducers/error-reducer'
import authReducer from '../reducers/auth-reducer'

export const rootReducer = combineReducers({
	errors: errorReducer,
	auth: authReducer,
})
