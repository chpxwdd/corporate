import { ACL_ROLE_SET, ACL_ROLE_ERRORS } from '../constants/acl.role'

export const getErrors = data => {
  return {
    type: ACL_ROLE_ERRORS,
    payload: data,
  }
}

export const setRole = data => {
  return {
    type: ACL_ROLE_SET,
    payload: data,
  }
}
