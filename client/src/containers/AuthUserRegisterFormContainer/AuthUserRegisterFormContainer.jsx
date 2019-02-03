import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors } from '../../actions/auth.user'
import AuthUserRegisterForm from '../../components/AuthUserRegisterForm'

class AuthUserRegisterFormContainer extends Component {
  render() {
    return <AuthUserRegisterForm {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    errors: store.user.errors,
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
)(withRouter(AuthUserRegisterFormContainer))
