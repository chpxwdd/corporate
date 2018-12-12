import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors, setCurrent } from '../../../actions/users-actions'
import RegisterForm from '../../../components/Users/RegisterForm'

class RegisterFormContainer extends Component {
  render() {
    return <RegisterForm {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    errors: store.users.errors,
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
)(withRouter(RegisterFormContainer))
