import { USER_SET_CURRENT, USER_GET_ERRORS } from './constant'

export const getErrors = data => {
  return {
    type: USER_GET_ERRORS,
    payload: data,
  }
}

export const setCurrent = data => {
  return {
    type: USER_SET_CURRENT,
    payload: data,
  }
}
