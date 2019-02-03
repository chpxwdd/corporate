import { ACL_ROLE_SET, ACL_ROLE_ERRORS } from '../constants/acl.role'

const initialState = {
  role: undefined,
}

export default function reducerAclRole(state = initialState, { type, payload }) {
  switch (type) {
    case ACL_ROLE_SET:
      return {
        ...state,
        role: payload,
      }
    case ACL_ROLE_ERRORS:
      return {
        ...state,
        errors: payload,
      }
    default:
      return state
  }
}
