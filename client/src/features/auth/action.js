import { AUTH_SET_CURRENT, AUTH_GET_ERRORS } from './constant'

export const getErrors = data => {
  return {
    type: AUTH_GET_ERRORS,
    payload: data,
  }
}

export const setCurrent = data => {
  return {
    type: AUTH_SET_CURRENT,
    payload: data,
  }
}
