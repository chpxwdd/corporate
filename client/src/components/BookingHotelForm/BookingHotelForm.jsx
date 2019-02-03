import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default class BookingHotelForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // default state
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
