import { USER_GET_ERRORS, USER_SET_CURRENT } from './constant'

const initialState = {
  current: null,
  errors: {},
}

export default function reducerUser(state = initialState, { type, payload }) {
  switch (type) {
    case USER_SET_CURRENT:
      return {
        ...state,
        current: payload,
      }

    case USER_GET_ERRORS:
      return {
        ...state,
        errors: payload,
      }

    default:
      return state
  }
}
