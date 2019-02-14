import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import AuthScreenLogin from '../features/auth/components/auth.screen.login'
import AuthScreenRegister from '../features/auth/components/auth.screen.register'
import Topnavbar from '../spaces/topnavbar'
import RootScreenHome from '../features/Root/screen/root.screen.home'

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Topnavbar />
          <Grid>
            <Row>
              <Col>
                <Route exact path="/" component={RootScreenHome} />
                <Route exact path="/register" component={AuthScreenRegister} />
                <Route exact path="/login" component={AuthScreenLogin} />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}
