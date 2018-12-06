import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionUserCreate, actionUserUpdate, actionUserDelete, actionUserListLoaded, actionUserSetCurrent } from '../../../actions/actionCategories'
import { User } from '../components/User'

class UserContainer extends Component {
	render() {
		const { categories, userListLoaded } = this.props
		return (
			<div>
				<User categories={categories} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.category.currentUser,
	categories: state.category.categories,
})

const mapDispatchToProps = dispatch => ({
	userCreate: bindActionCreators(actionUserCreate, dispatch),
	userUpdate: bindActionCreators(actionUserUpdate, dispatch),
	userDelete: bindActionCreators(actionUserDelete, dispatch),
	userSetCurrent: bindActionCreators(actionUserSetCurrent, dispatch),
	userListLoaded: bindActionCreators(actionUserListLoaded, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserContainer)
