import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthLinksContainer from '../../containers/AuthLinksContainer'

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
            <Nav>
              <NavItem componentClass={Link} href="/" to="/" active={window.location.pathname === '/'}>
                Home
              </NavItem>
            </Nav>
            <AuthLinksContainer />
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Topnavbar
