import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { setCurrent } from '../../actions/user-actions'
import AuthLinks from '../../components/AuthLinks'

class AuthLinksContainer extends Component {
  render() {
    return <AuthLinks {...this.props} />
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
)(withRouter(AuthLinksContainer))
