import {
  USERS_GET_ERRORS,
  USERS_SET_CURRENT,
} from '../constants/users-constants'

import isEmpty from '../validation/is-empty'

const initialState = {
  current: {},
  errors: {},
}

export default function usersReducers(state = initialState, { type, payload }) {
  switch (type) {
    case USERS_SET_CURRENT:
      return {
        ...state,
        current: payload,
      }

    case USERS_GET_ERRORS:
      return {
        ...state,
        errors: payload,
      }

    default:
      return state
  }
}
