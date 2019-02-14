import React, { Component } from 'react'
import { Navbar, Glyphicon } from 'react-bootstrap'
import RootNavLinks from '../features/Root/nav/root.nav.links'
import UserNavLinks from '../features/user/components/user.nav.links'

export default class Topnavbar extends Component {
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
            <RootNavLinks />
            <UserNavLinks />
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
