import { AUTH_USER_SET, AUTH_USER_ERRORS } from '../constants/auth.user'

export const getErrors = data => {
  return {
    type: AUTH_USER_ERRORS,
    payload: data,
  }
}

export const setCurrent = data => {
  return {
    type: AUTH_USER_SET,
    payload: data,
  }
}
