import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class BookingFlyingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tripType: 1,
      directOnly: true,
      daysNearest: 3,
      serviceType: '',
      adultsCount: 1,
      children: [],
      routes: [],
    }
  }

  render() {
    return (
      <Form>
        <Button type="submit">Search</Button>
      </Form>
    )
  }
}
