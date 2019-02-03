import { AUTH_USER_ERRORS, AUTH_USER_SET } from '../constants/auth.user'

const initialState = {
  current: null,
  errors: {},
}

export default function reducerAuthUser(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_USER_SET:
      return {
        ...state,
        current: payload,
      }

    case AUTH_USER_ERRORS:
      return {
        ...state,
        errors: payload,
      }

    default:
      return state
  }
}
