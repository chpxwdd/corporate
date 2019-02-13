import { AUTH_GET_ERRORS, AUTH_SET_CURRENT } from './constant'

const initialState = {
  current: null,
  errors: {},
}

export default function reducerAuth(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_SET_CURRENT:
      return {
        ...state,
        current: payload,
      }

    case AUTH_GET_ERRORS:
      return {
        ...state,
        errors: payload,
      }

    default:
      return state
  }
}
