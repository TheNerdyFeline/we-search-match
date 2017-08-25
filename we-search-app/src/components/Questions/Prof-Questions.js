import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Col, Grid, Row, Jumbotron, select} from 'react-bootstrap';
//import NavbarComponent from '../Nav/NavbarComponent';
import axios from 'axios';
import {Redirect} from "react-router-dom";

export default class Questions extends Component {
    componentDidMount() {
	console.log(this.state.studProf);
    }
    
    constructor(props) {
	super(props);	
	this.state = {
	    profForm: {
		min_gpa: "",
		min_year: "",
		field: '',
		university: '',
		student_status: "",
		help_get_in: "",
		hours_week: "",
		pay_position: "",
		ta: "",
		interest: "", 
		location: "", 
		available: "",
		about: '',
		linkedin: "",
		uuid: this.props.location.state1
	    },
	    fireRedirect: 0,
	    studProf: this.props.location.state2
	};
	
	this.handleChange = this.handleChange.bind(this);
	this.submitForm = this.submitForm.bind(this);
    }

    handleChange(property, e) {
    	const profForm = this.state.profForm;
	profForm[property] = e.target.value;
	this.setState({ profForm: profForm});
    }

    submitForm(event) {
	event.preventDefault();
	console.log(this.state.profForm);
  	axios.post('/api/newprofessorform', { 
	    profForm: this.state.profForm
	}).then(response => {
	    console.log(response.data);
	    if(response.data === "ok") {
		this.setState({fireRedirect: 1});
	    }
	}).catch(function (error) {
	    console.log(error);
	});
    }

    render() {
	const profForm = this.state.profForm;
	return (
	    <div>
	      
	      <Grid>
		<Jumbotron className='text-center'>  
		  <Row>
		    <Col xs={2}></Col>
		    <Col xs={8}>
		      <h1>Survey Questions</h1>
		    </Col>
		    <Col xs={2}></Col>
		  </Row>
		</Jumbotron>
		<Jumbotron>
		<Row>
		  <Col lg={12}>
		    <h4>About You</h4>
		  </Col>
		</Row>
		<Row>
		  <Col lg={12}>
		    <form onSubmit={this.submitForm}>
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>What is the minium GPA you are looking for?</ControlLabel>
			<FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )" value={profForm.min_gpa} onChange={this.handleChange.bind(this, "min_gpa")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>What year does a student need to be, to be eligible?</ControlLabel>
			<select value={profForm.min_year} onChange={this.handleChange.bind(this, "min_year")}>
			  <option>Select</option>
			  <option>High School Senior</option>
			  <option>College Freshmen</option>
			  <option>College Sophmore</option>
			  <option>College Junior</option>
			  <option>College Senior</option>
			  <option>College Super Senior(5+ years)</option>
			  <option>Grad School</option>
			  <option>Doctorate</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>What field do you work in?</ControlLabel>
                        <br/>
                        <select value={profForm.field} onChange={this.handleChange.bind(this, "field")}>
			  <option>Select</option>
                          <option>Medical/Pre-med</option>
                          <option>Theatre</option>
                        </select>
                      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Which univeristy are you affiliated with?</ControlLabel>
                        <br/>
                        <select value={profForm.university} onChange={this.handleChange.bind(this, "university")}>
			  <option>Select</option>
                          <option>UCLA</option>
                          <option>USC</option>
                        </select>                        
                      </FormGroup>

		      <FormGroup controlId='formControlsText'>
			<ControlLabel>What status does a student need to be?</ControlLabel>
			<br/>
			<select value={profForm.student_status} onChange={this.handleChange.bind(this, "student_status")}>
			  <option>Select</option>
			  <option>Enrolled At Your University</option>
			  <option>Applying To Your University</option>
			  <option>Enrolled and Appplyng to Switch To Your University</option>
			  <option>Enrolled and Enrolled to Switch To Your University</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Can you help a student get into your program?</ControlLabel>
			<br/>
			<select value={profForm.help_get_in} onChange={this.handleChange.bind(this, "help_get_in")}>
			  <option>Select</option>
			  <option>Yes</option>
			  <option>No</option>
		  	</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week do students need to be available to do research?</ControlLabel>
			<FormControl placeholder="" value={profForm.hours_week} onChange={this.handleChange.bind(this, "hours_week")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Do you provide compensation(pay check, partial scholarship, or credit)?</ControlLabel>
			<br/>
			<select value={profForm.pay_position} onChange={this.handleChange.bind(this, "pay_position")}>
			<option>Select</option>
			<option>Yes</option>
			<option>No</option>
		  	</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Are your students required to work as a Teaching Assistants?</ControlLabel>
			<br/>
			<select value={profForm.ta} onChange={this.handleChange.bind(this, "ta")}>
			  <option>Select</option>
			  <option>Yes</option>
			  <option>No</option>
		  	</select>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>Research Interests</ControlLabel>
			<FormControl type='text' placeholder="Research Interests" value={profForm.interest} onChange={this.handleChange.bind(this, "interest")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Where do you live?</ControlLabel>
			<FormControl placeholder="City, ST" value={profForm.location} onChange={this.handleChange.bind(this, "location")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Do you have any openings in you research department?</ControlLabel>
			<br/>
			<select value={profForm.available} onChange={this.handleChange.bind(this, "available")}>
			  <option>Select</option>
			  <option>Yes</option>
			  <option>No</option>
		  	</select>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>About Me</ControlLabel>
			<FormControl placeholder="About Me" value={profForm.about} onChange={this.handleChange.bind(this, "about")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>LinkedIn</ControlLabel>
			<FormControl placeholder="Linkedin URL" value={profForm.linkedin} onChange={this.handleChange.bind(this, "linkedin")}>
			</FormControl>
		      </FormGroup>
		      
		      <Button type="submit">
			Submit
		      </Button>
		    </form>
		    {(this.state.fireRedirect === 1) ?
		    (<Redirect to='/'/>) : null}
	    </Col>
		</Row>
		</Jumbotron>
	    </Grid>
		</div>
	);
    }
}
