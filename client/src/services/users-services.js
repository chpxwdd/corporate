import axios from 'axios'
import jwt_decode from 'jwt-decode'
import * as usersActions from '../actions/users-actions'
import setAuthToken from '../setAuthToken'

export const register = (user, history) => {
  axios
    .post('/api/users/register', user)
    .then(res => history.push('/login'))
    .catch(err => {
      // reduxAction
      usersActions.getErrors(err.response.data)
    })
}

export const login = user => {
  axios
    .post('/api/users/register', user)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      // reduxAction
      usersActions.setCurrent(decoded)
    })
    .catch(err => {
      // reduxAction
      usersActions.getErrors(err.response.data)
    })
}

export const logout = history => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  // reduxAction - put empty userObj to store
  usersActions.setCurrent({})
  history.push('/login')
}
