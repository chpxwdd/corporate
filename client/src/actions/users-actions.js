import {
  USERS_SET_CURRENT,
  USERS_GET_ERRORS,
} from '../constants/users-constants'

export const getErrors = data => {
  return {
    type: USERS_GET_ERRORS,
    payload: data,
  }
}

export const setCurrent = data => {
  return {
    type: USERS_SET_CURRENT,
    payload: data,
  }
}
