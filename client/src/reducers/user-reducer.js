import { USER_CREATE, USER_UPDATE, USER_DELETE, USER_SET_CURRENT, USER_LIST_LOADED } from '../constants/user-constants'

const initialState = {
	users: [],
}
export default (state = initialState, action) => {
	switch (action.type) {
		case USER_LIST_LOADED:
			return {
				...state,
				users: action.payload.users,
			}
		case USER_CREATE:
			return {
				...state,
				users: [action.payload.user].concat(state.users),
			}
		case USER_DELETE:
			return {
				...state,
				users: state.users.filter(user => user._id !== action.payload),
				currentCategory: undefined,
			}
		case USER_SET_CURRENT:
			return {
				...state,
				currentCategory: action.payload,
			}
		case USER_UPDATE:
			return {
				...state,
				users: state.users.map(user => {
					if (user._id === action.payload.user._id) {
						return {
							...action.payload.user,
						}
					}
					return user
				}),
				currentCategory: undefined,
			}
		default:
			return state
	}
}
