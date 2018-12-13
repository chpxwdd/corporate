import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'
import setAuthToken from '../../../setAuthToken'

export default class NavbarLinks extends Component {
  logout = e => {
    e.preventDefault()
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    this.props.setCurrent({})
    this.props.history.push('/login')
  }

  renderGuestNav() {
    return (
      <Nav>
        <NavItem
          componentClass={Link}
          href="/register"
          to="/register"
          active={window.location.pathname === '/register'}
        >
          Signup <Glyphicon glyph="user" />
        </NavItem>
        <NavItem
          componentClass={Link}
          href="/login"
          to="/login"
          active={window.location.pathname === '/login'}
        >
          Signin <Glyphicon glyph="login" />
        </NavItem>
      </Nav>
    )
  }

  renderMemberAuth() {
    return (
      <Nav>
        <NavItem
          componentClass={Link}
          href="/login"
          to="/login"
          onClick={this.logout.bind(this)}
        >
          Logout <Glyphicon glyph="logout" />
        </NavItem>
      </Nav>
    )
  }

  render() {
    return
    {
      this.props.current ? this.renderMemberAuth() : this.renderGuestNav()
    }
  }
}
