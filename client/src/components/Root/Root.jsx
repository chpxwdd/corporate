import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import AuthUserRegisterFormContainer from '../../containers/AuthUserRegisterFormContainer'
import AuthUserLoginFormContainer from '../../containers/AuthUserLoginFormContainer'
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
                <Route exact path="/register" component={AuthUserRegisterFormContainer} />
                <Route exact path="/login" component={AuthUserLoginFormContainer} />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}
