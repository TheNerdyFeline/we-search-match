import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default class NavbarComponent extends Component {
    render() {
	return (
	    <div>
	      <Navbar inverse collapseOnSelect>
		<Navbar.Header>
		  <Navbar.Brand>
		    <a href="/">We-Search</a>
		  </Navbar.Brand>
		  <Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		  <Nav pullRight>
		    <NavItem eventKey={1} href="/dashboard">Dashboard</NavItem>
		    <NavItem eventKey={2} href="/signout">Sign Out</NavItem>
		  </Nav>
		</Navbar.Collapse>
	      </Navbar>
	    </div>
	);
    };
};
