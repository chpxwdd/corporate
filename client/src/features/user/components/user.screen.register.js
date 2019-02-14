import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors } from '../action'
import UserFormRegister from './user.form.register'

class UserScreenRegister extends Component {
  render() {
    return <UserFormRegister {...this.props} />
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
)(withRouter(UserScreenRegister))
