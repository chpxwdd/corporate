import React, { Component } from 'react'
import { Navbar, Glyphicon } from 'react-bootstrap'
import RootNavLinks from '../features/Root/nav/root.nav.links'
import AuthNavLinks from '../features/auth/components/auth.nav.links'

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
            <RootNavLinks />
            <AuthNavLinks />
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

// const mapStateToProps = store => {
//   return {
//     current: store.user.current,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setCurrent: bindActionCreators(setCurrent, dispatch),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(Topnavbar))

export default Topnavbar
