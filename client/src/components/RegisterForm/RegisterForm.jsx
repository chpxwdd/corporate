import React, { Component } from 'react'
import { Form, FormGroup, Button, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import axios from 'axios'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)
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
    if (this.props.errors[e.target.id]) {
      delete this.props.errors[e.target.id]
    }
  }

  register = (user, history) => {
    axios
      .post('/api/user/register', user)
      .then(res => history.push('/login'))
      .catch(err => {
        this.props.getErrors(err.response.data)
      })
  }

  getValidationState(field) {
    if (this.props.errors[field]) {
      return 'error'
    }
    return null
  }

  renderFormGroup(field, inputType, label = '') {
    if (label === '') {
      label = field
    }
    return (
      <FormGroup controlId={field} validationState={this.props.errors[field] ? 'error' : null}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type={inputType} value={this.state[field]} onChange={this.handleInputChange} />
        {/* <FormControl.Feedback /> */}
        {this.props.errors[field] && <HelpBlock>{this.props.errors[field]}</HelpBlock>}
      </FormGroup>
    )
  }

  render() {
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
