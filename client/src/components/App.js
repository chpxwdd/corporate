import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Topnavbar from './Topnavbar'
import RegisterContainer from '../containers/Users/RegisterContainer'
import LoginContainer from '../containers/Users/LoginContainer'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Topnavbar />
          <Grid>
            <Row>
              <Col
                xs={12}
                sm={10}
                smOffset={1}
                md={8}
                mdOffset={2}
                lg={6}
                lgOffset={3}
              >
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={RegisterContainer} />
                <Route exact path="/login" component={LoginContainer} />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
