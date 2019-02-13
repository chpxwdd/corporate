import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors, setCurrent } from '../action'
import AuthFormLogin from './auth.form.login'

class AuthScreenLogin extends Component {
  render() {
    return <AuthFormLogin {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    errors: store.auth.errors,
    current: store.auth.current,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getErrors: bindActionCreators(getErrors, dispatch),
    setCurrent: bindActionCreators(setCurrent, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthScreenLogin))
