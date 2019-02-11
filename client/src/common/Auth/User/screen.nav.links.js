import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { setCurrent } from '../../actions/auth.user'
import AuthUserNavLinks from '../../components/AuthUserNavLinks'

class AuthUserNavLinksContainer extends Component {
  render() {
    return <AuthUserNavLinks {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    current: store.user.current,
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
)(withRouter(AuthUserNavLinksContainer))
