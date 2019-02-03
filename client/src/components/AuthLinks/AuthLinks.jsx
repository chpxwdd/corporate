import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../../setAuthToken'

export default class AuthLinks extends Component {
  constructor(props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  componentDidMount() {
    if (!localStorage.jwtToken) {
      return
    }

    setAuthToken(localStorage.jwtToken)
    const decoded = jwt_decode(localStorage.jwtToken)
    this.props.setCurrent(decoded)

    const currentTime = Date.now() / 1000

    if (decoded.exp >= currentTime) {
      return
    }
    this.onLogout()
  }

  onLogout = () => {
    // e.preventDefault()
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    this.props.setCurrent(null)
    this.props.history.push('/login')
  }

  memberNav = () => {
    return (
      <Nav pullRight>
        <NavItem
          componentClass={Link}
          href="/logout"
          to="/logout"
          onClick={this.onLogout}
          active={window.location.pathname === '/logout'}
        >
          Logout
        </NavItem>
      </Nav>
    )
  }

  guestNav = () => {
    return (
      <Nav pullRight>
        <NavItem componentClass={Link} href="/login" to="/login" active={window.location.pathname === '/login'}>
          Signin
        </NavItem>
        <NavItem
          componentClass={Link}
          href="/register"
          to="/register"
          active={window.location.pathname === '/register'}
        >
          Signup
        </NavItem>
      </Nav>
    )
  }

  render() {
    return this.props.current ? this.memberNav() : this.guestNav()
  }
}
