import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import UserScreenLogin from '../features/user/components/user.screen.login'
import UserScreenRegister from '../features/user/components/user.screen.register'
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
                <Route exact path="/register" component={UserScreenRegister} />
                <Route exact path="/login" component={UserScreenLogin} />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}
