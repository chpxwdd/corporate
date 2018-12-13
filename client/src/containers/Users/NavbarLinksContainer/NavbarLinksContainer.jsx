import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { setCurrent } from '../../../actions/users-actions'
import NavbarLinks from '../../../components/Users/NavbarLinks'

class NavbarLinks extends Component {
  render() {
    return <NavbarLinks {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    current: store.users.current,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrent: bindActionCreators(setCurrent, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarLinks))
