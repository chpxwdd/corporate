import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class RootNavLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem componentClass={Link} href="/" to="/" active={window.location.pathname === '/'}>
            Home
          </NavItem>
        </Nav>
      </div>
    )
  }
}
