import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors, setCurrent } from '../action'
import UserFormLogin from './user.form.login'

class UserScreenLogin extends Component {
  render() {
    return <UserFormLogin {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    errors: store.user.errors,
    current: store.user.current,
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
)(withRouter(UserScreenLogin))
