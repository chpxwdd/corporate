import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import RegisterFormContainer from '../../containers/RegisterFormContainer'
import LoginFormContainer from '../../containers/LoginFormContainer'
import Topnavbar from '../Topnavbar'
import Home from '../Home'

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Topnavbar />
          <Grid>
            <Row>
              <Col>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={RegisterFormContainer} />
                <Route exact path="/login" component={LoginFormContainer} />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}
