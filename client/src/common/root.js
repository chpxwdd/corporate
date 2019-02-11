import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import AuthUserFormRegisterContainer from './Auth/User/screen.register'
import AuthUserFormLoginContainer from './Auth/User/screen.login'
import Topnavbar from './topnavbar'
import Home from './home'

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
                <Route path="/register" component={AuthUserFormRegisterContainer} />
                <Route path="/login" component={AuthUserFormLoginContainer} />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}
