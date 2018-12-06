import React, { Component } from 'react'
import {
	Navbar,
	Nav,
	NavItem,
	InputGroup,
	Glyphicon,
	FormGroup,
	FormControl,
	Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Topnavbar extends Component {
	render() {
		return (
			<div>
				<Navbar fixedTop inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">
								<Glyphicon glyph="home" /> Sodis Travel
							</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullLeft>
							<NavItem
								componentClass={Link}
								href="/"
								to="/"
								active={window.location.pathname === '/'}
							>
								Home
							</NavItem>
							<NavItem
								componentClass={Link}
								href="/login"
								to="/login"
								active={window.location.pathname === '/login'}
							>
								login
							</NavItem>
							<NavItem
								componentClass={Link}
								href="/register"
								to="/register"
								active={window.location.pathname === '/register'}
							>
								register
							</NavItem>
						</Nav>
						<Navbar.Form pullRight>
							<FormGroup>
								<InputGroup>
									<FormControl type="text" placeholder="Search" />
									<InputGroup.Button>
										<Button>
											<Glyphicon glyph="search" />
										</Button>
									</InputGroup.Button>
								</InputGroup>
							</FormGroup>
						</Navbar.Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default Topnavbar
