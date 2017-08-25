import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './FormInstance.css';

export default class FormInstance extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    user: {
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		userId: '',
		studProf: ''
	    },
	    fireRedirect: 0   
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp(e) {
	e.preventDefault();
	this.setState({fireRedirect: 2});
    }

    handleChange(property, e) {
	const user = this.state.user;
	user[property] = e.target.value;
	this.setState({user: user});
    }

    handleSubmit(event) {
	event.preventDefault();
  	axios.post('/login', {
            email: this.state.user.email, 
            password: this.state.user.password
      	}).then(response => {
	    console.log(response);
	    if(response.status === 200) {
		this.setState({
		    user: {
			first_name: response.data.user.first_name,
			last_name: response.data.user.last_name,
			email: this.state.user.email,
			userId: response.data.user.userId,
			studProf: response.data.user.studProf
		    },
		    fireRedirect: 1
		});
	    } else {
		console.log("could not login");
	    }
      	}).catch(function (error) {
            console.log(error);
            console.log("login error");
	});
    }
    
    render() {
	const user = this.state.user;
	
        return (
	    <div>
	      <Grid>
          	<Row>
          	  <Col xs={2}></Col>
          	  <Col xs={8}>
          	    <Jumbotron className="jumbotron">
          	      <h2 className="text-center welcome">Welcome to <span className='we-search'>We-Search</span></h2> 
		      <Form horizontal>
			<FormGroup controlId="formHorizontalEmail">
			  <Col className="labels" componentClass={ControlLabel} sm={2}>
			    Email
			  </Col>
			  <Col sm={10}>
			    <FormControl type="email" placeholder="Email" value={this.state.value} onChange={this.handleChange.bind(this, "email")} />
			  </Col>
			</FormGroup>

			<FormGroup controlId="formHorizontalPassword">
			  <Col className="labels" componentClass={ControlLabel} sm={2}>
			    Password
			  </Col>
			  <Col sm={10}>
			    <FormControl type="password" placeholder="Password" value={this.state.value} onChange={this.handleChange.bind(this, "password")} />
			  </Col>
			</FormGroup>

			<FormGroup>
			  <Col smOffset={2} sm={10}>
			    <Checkbox className="labels">Remember me</Checkbox>
			  </Col>
			</FormGroup>
			

			<FormGroup>
			  <Col smOffset={2} sm={10}>
			    <Button type="submit" onClick={this.handleSubmit}>Sign in
			    </Button>
			    {(this.state.fireRedirect === 1 && this.state.fireRedirect !== 0) ?
			    (<Redirect to={{pathname: '/dashboard', userId: user.userId, studProf: user.studProf, firstName: user.first_name, lastName: user.last_name, email: user.email}}/>) : null}
	    </Col>
		<Col smOffset={2} sm={10}>
		<h5 className='account'>Don't have an account already?</h5>
			  </Col>
			  <Col smOffset={2} sm={10}>
<button onClick={this.handleSignUp}>Create Account
                </button>
{(this.state.fireRedirect === 2 && this.state.fireRedirect !== 0) ? (<Redirect to={{pathname: '/signup'}}/>) : null}

			  </Col>
			</FormGroup>
		      </Form>
	  	    </Jumbotron>
  		  </Col>
  		  <Col xs={2}></Col>
  		</Row>
	      </Grid>
            </div>
          );
}
}

