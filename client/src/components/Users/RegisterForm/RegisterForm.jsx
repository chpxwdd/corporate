import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Button,
  FormControl,
  ControlLabel,
  HelpBlock,
} from 'react-bootstrap'
// import PropTypes from 'prop-types'
import axios from 'axios'
// import jwt_decode from 'jwt-decode'

// import * as UserAPI from '../../../services/users-services'

class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirm: this.state.confirm,
    }
    this.register(user, this.props.history)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  register = (user, history) => {
    axios
      .post('/api/users/register', user)
      .then(res => history.push('/login'))
      .catch(err => {
        this.props.getErrors(err.response.data)
      })
  }

  getValidationState(e) {
    console.log('getValidationState', e)
  }

  renderFormGroup(field, inputType, label = '') {
    if (label === '') {
      label = field
    }
    return (
      <FormGroup
        controlId={field}
        validationState={this.getValidationState({ field })}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type={inputType}
          value={this.state[field]}
          onChange={this.handleInputChange}
        />
        {/* <FormControl.Feedback /> */}
        {this.props.errors[field] && (
          <HelpBlock>{this.props.errors[field]}</HelpBlock>
        )}
      </FormGroup>
    )
  }

  render() {
    console.log(this.props)
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderFormGroup('username', 'text', 'Имя пользователя')}
        {this.renderFormGroup('email', 'text', 'E-M@il')}
        {this.renderFormGroup('password', 'password', 'Пароль')}
        {this.renderFormGroup('confirm', 'password', 'Подтверждение')}

        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}
export default RegisterForm

// RegisterForm.propTypes = {
//   users: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({
//   users: state.users,
// })

// const mapDispatchToProps = dispatch => ({
//   register: bindActionCreators(actionCategoryCreate, dispatch),
// })

// export default connect(
//   mapStateToProps,
//   {}
//   //   mapDispatchToProps
// )(withRouter(RegisterForm))
