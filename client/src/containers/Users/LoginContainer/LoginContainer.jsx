import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors, setCurrent } from '../../../actions/users-actions'
import Login from '../../../components/Users/Login'

class LoginContainer extends Component {
  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    errors: store.users.errors,
    current: store.users.current,
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
)(withRouter(LoginContainer))
