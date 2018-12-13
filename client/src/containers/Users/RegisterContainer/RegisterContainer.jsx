import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getErrors } from '../../../actions/users-actions'
import Register from '../../../components/Users/Register'

class RegisterContainer extends Component {
  render() {
    return <Register {...this.props} />
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
)(withRouter(RegisterContainer))
