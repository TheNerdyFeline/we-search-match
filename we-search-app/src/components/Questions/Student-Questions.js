import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Col, Grid, Row, Jumbotron } from 'react-bootstrap';
import axios from "axios";
import {Redirect} from "react-router-dom";


export default class Questions extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    studentForm: {
		gpa: '',
		year: '',
		major: '',
		university: '',
		student_status: '',
		university_switch: '',
		hours_week: '',
		need_pay: '',
		ta: '',
		interest: '',
		location: '',
		career: '',
		about: '',
		linkedin: '',
		website: '',
		resume: '',
		uuid: this.props.location.state1
	    },
	    fireRedirect: 0,
	    studProf: this.props.location.state2
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(property, e) {	
	const studentForm = this.state.studentForm;
	studentForm[property] = e.target.value;
	this.setState({ studentForm: studentForm});
    }

    handleSubmit(event) {
	event.preventDefault();
    	axios.post('/api/newstudentform', {
            studentForm: this.state.studentForm
	}).then(response => {
	    if(response.data === "ok") {
		this.setState({fireRedirect: 1});
	    }
	}).catch(function (error) {
            console.log(error);
	});
    }

    render() {
	const studentForm = this.state.studentForm;
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
		    <form onSubmit={this.handleSubmit}>
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>GPA</ControlLabel>
			<FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )" value={studentForm.gpa} onChange={this.handleChange.bind(this, "gpa")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>What year are you?</ControlLabel>
			<select value={studentForm.year} onChange={this.handleChange.bind(this, "year")}>
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
			<ControlLabel>What is your major?</ControlLabel>
			<select value={studentForm.major} onChange={this.handleChange.bind(this, "major")}>
			  <option>Select</option>
			  <option>Biology/Pre-Med</option>
			  <option>Theatre Technology</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>Which univeristy are you currently enrolled in?</ControlLabel>
			<br/>
			<select value={studentForm.university} onChange={this.handleChange.bind(this, "university")}>
			  <option>Select</option>
			  <option>None</option>
			  <option>UCLA</option>
			  <option>USC</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What is your current student status?</ControlLabel>
			<br/>
			<select value={studentForm.student_status} onChange={this.handleChange.bind(this, "student_status")}>
			  <option>Select</option>
			  <option>Enrolled</option>
			  <option>Applying To</option>
			  <option>Enrolled and Appplyng to Switch</option>
			  <option>Enrolled and Enrolled to Switch</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>What university do you plan to switch to?</ControlLabel>
			<br/>
			<select value={studentForm.university_switch} onChange={this.handleChange.bind(this, "university_switch")}>
			  <option>Select</option>
			  <option>UCLA</option>
			  <option>USC</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week can you commit to doing research?</ControlLabel>
			<FormControl type="text" placeholder="" value={studentForm.hours_week} onChange={this.handleChange.bind(this, "hours_week")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>Do you need a compensation(paid, partial scholarship, or credit)?</ControlLabel>
			<br/>
			<select value={studentForm.need_pay} onChange={this.handleChange.bind(this, "need_pay")}>
			  <option>Select</option>
			  <option>Yes</option>
			  <option>No</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>Are you willing to be a TA?</ControlLabel>
			<br/>
			<select value={studentForm.ta} onChange={this.handleChange.bind(this, "ta")}>
			  <option>Select</option>
			  <option>Yes</option>
			  <option>No</option>
			</select>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>Research Interests</ControlLabel>
			<FormControl type='text' placeholder="Research Interests" value={studentForm.interest} onChange={this.handleChange.bind(this, "interest")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Where do you live?</ControlLabel>
			<FormControl type="text" placeholder="City, ST" value={studentForm.location} onChange={this.handleChange.bind(this, "location")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What are your career goals?</ControlLabel>
			<FormControl type="text" placeholder="Career goals" value={studentForm.career} onChange={this.handleChange.bind(this, "career")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>About Me</ControlLabel>
			<FormControl type="text" placeholder="Career goals" value={studentForm.about} onChange={this.handleChange.bind(this, "about")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>LinkedIn</ControlLabel>
			<FormControl type="text" placeholder="Career goals" value={studentForm.linkedin} onChange={this.handleChange.bind(this, "linkedin")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Personal Website</ControlLabel>
			<FormControl type="text" placeholder="Career goals" value={studentForm.website} onChange={this.handleChange.bind(this, "website")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsFile' value={studentForm.resume} onChange={this.handleChange.bind(this, "resume")}>
			<ControlLabel>Resume Upload</ControlLabel>
			<FormControl type='file' />
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
