import { AUTH_USER_SET, AUTH_USER_ERRORS } from './constant'

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
