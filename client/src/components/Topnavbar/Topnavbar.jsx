import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  InputGroup,
  Glyphicon,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Topnavbar extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <Glyphicon glyph="home" /> Sodis Travel
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <NavItem
                componentClass={Link}
                href="/"
                to="/"
                active={window.location.pathname === '/'}
              >
                Home
              </NavItem>
              <NavItem
                componentClass={Link}
                href="/registerform"
                to="/registerform"
                active={window.location.pathname === '/registerform'}
              >
                registerform
              </NavItem>
              <NavItem
                componentClass={Link}
                href="/loginform"
                to="/loginform"
                active={window.location.pathname === '/loginform'}
              >
                loginform
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Topnavbar
