import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Topnavbar from './Topnavbar'
import Register from './User/Register'
import Login from './User/Login'
import Home from './Home'

class App extends Component {
	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<div className="main">
						<Topnavbar />
						<Grid>
							<Row>
								<Route exact path="/" component={Home} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</Row>
						</Grid>
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default App
