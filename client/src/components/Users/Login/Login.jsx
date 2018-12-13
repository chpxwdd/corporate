import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Button,
  FormControl,
  ControlLabel,
  HelpBlock,
} from 'react-bootstrap'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../../../setAuthToken'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.current) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current) {
      this.props.history.push('/')
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.login(user)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })

    if (this.props.errors[e.target.id]) {
      delete this.props.errors[e.target.id]
    }
  }

  login = (user, history) => {
    axios
      .post('/api/users/login', user)
      .then(res => {
        const { token } = res.data
        localStorage.setItem('jwtToken', token)
        setAuthToken(token)
        const decoded = jwt_decode(token)
        this.props.setCurrent(decoded)
      })
      .catch(err => {
        this.props.getErrors(err.response.data)
      })
  }

  renderFormGroup(field, inputType, label = '') {
    if (label === '') {
      label = field
    }
    return (
      <FormGroup
        controlId={field}
        validationState={this.props.errors[field] ? 'error' : null}
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
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderFormGroup('email', 'text', 'E-M@il')}
        {this.renderFormGroup('password', 'password', 'Пароль')}
        <Button type="submit">Signup</Button>
      </Form>
    )
  }
}
