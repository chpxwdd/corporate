import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class RoleFormContainer extends Component {
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
        {this.renderFormGroup('name', 'text', 'Название')}
        {this.renderFormGroup('parent', 'password', 'Пароль')}
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}
