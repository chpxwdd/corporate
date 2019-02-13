import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors } from '../action'
import AuthFormRegister from './auth.form.register'

class AuthScreenRegister extends Component {
  render() {
    return <AuthFormRegister {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    errors: store.auth.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getErrors: bindActionCreators(getErrors, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthScreenRegister))
