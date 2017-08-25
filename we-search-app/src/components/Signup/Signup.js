import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Col, Grid, Row, Jumbotron} from 'react-bootstrap';
import {
    BrowserRouter as
    Link, Redirect
} from 'react-router-dom';
import axios from "axios";

class Signup extends Component {  
    constructor(props) {
	super(props);
	this.state = {
	    user: {
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		studProf: ''
	    },
	    userId: '',
	    fireRedirect: 0
	    
	};

	this.handleChange = this.handleChange.bind(this);	
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(property, e) {	
	const user = this.state.user;
	user[property] = e.target.value;
	this.setState({ user: user});
	
    }

    handleSubmit(event) {
	event.preventDefault();
	axios.post('/signup', {
            user: this.state.user
	}).then(response => {
	    if(response.data.studProf === 'Student') {
		this.setState({
		    user: {
			studProf: "Student"
		    },
		    userId: response.data.userId,
		    fireRedirect: 1
		});
		console.log("created new student");
	    } else if(response.data.studProf === 'Professor') {
		this.setState({
		    user: {
			stufProf: "Professor"
		    },
		    userId: response.data.userId,
		    fireRedirect: 2});
		console.log("created new Professor");
	    } else {
		console.log("could not create new user");
	    }
	}).catch(function (error) {
            console.log(error);
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
          	      <h2 className="text-center">Sign Up</h2>
		      
	  	    </Jumbotron>

		    <Jumbotron className='jumbotron'>
		      
                      <Row>
			<Col lg={12}>
			  <form onSubmit={this.handleSubmit}>
			    <FormGroup controlId='formControlsText'>
                              <ControlLabel>First Name</ControlLabel>
                              <FormControl type='text' placeholder="John" value={user.first_name} onChange={this.handleChange.bind(this, "first_name")} >

                              </FormControl>
			    </FormGroup>
			    
			    <FormGroup controlId='formControlsText'>
                              <ControlLabel>Last Name</ControlLabel>
                              <FormControl type='text' placeholder="Smith" value={user.last_name} onChange={this.handleChange.bind(this, "last_name")}>
                              </FormControl>
			    </FormGroup>
			    
			    <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Email</ControlLabel>
                              <FormControl  type='email' placeholder="johnsmith@gmail.com" value={user.email} onChange={this.handleChange.bind(this, "email")}>
                              </FormControl>
			    </FormGroup>
			    
			    <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Password</ControlLabel>
                              <FormControl  type='password' value={user.password} onChange={this.handleChange.bind(this, "password")}>
                              </FormControl>
			    </FormGroup>

			    <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Are you a student or professor?</ControlLabel>
                              <br/>
                              <select value={user.studProf} onChange={this.handleChange.bind(this, "studProf")}>
				<option value="select">Select</option>
				<option value="Student">Student</option>
				<option value="Professor">Professor</option>
                              </select>
			      

			    </FormGroup>
			    
			    <br/>
			    
			    <Button type="submit">Submit</Button>
			  </form>
		{(this.state.fireRedirect === 1 && this.state.fireRedirect !== 0) ?
			      (<Redirect to={{pathname: '/studentquestions', state1: this.state.userId, state2: this.state.studProf}}/>) :
		 (this.state.fireRedirect === 2 && this.state.fireRedirect !== 0) ?
		 <Redirect to={{pathname:'/profquestions', state1: this.state.userId, state2: this.state.studProf}}/> : null }
			</Col>
                      </Row>

		    </Jumbotron>

  		  </Col>
  		  <Col xs={2}></Col>
  		</Row>
	      </Grid>

            </div>

        );

    }

    
}


export default Signup;
