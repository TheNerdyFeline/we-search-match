import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap';
import axios from "axios";

class StudentEditQuestions extends Component {
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
		uuid: this.props.uuid
	    }
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(property, e) {	
	const studentForm = this.state.studentForm;
	studentForm[property] = e.target.value;
	this.setState({ studentForm: studentForm});
    }

    handleUpdate(event) {
	event.preventDefault();
	console.log(this.state.hours_week);
    	axios.put('/api/updatestudentform', {
            studentForm: this.state.studentForm
	}).then(response => {
	    if(response.data === "ok") {
	    }
	}).catch(function (error) {
            console.log(error);
	});
    }
    componentWillMount() {
	axios.get("/api/studentform", {
	}).then(response => {
	    this.setState({
		studentForm: {
		    gpa: response.data.gpa,
		    year: response.data.year,
		    major: response.data.major,
		    university: response.data.university,
		    student_status: response.data.student_status,
		    university_switch: response.data.university_switch,
		    hours_week: response.data.hours_week,
		    need_pay: response.data.need_pay,
		    ta: response.data.ta,
		    interest: response.data.research_interest,
		    location: response.data.location,
		    career: response.data.career,
		    about: response.data.about,
		    linkedin: response.data.linkedin,
		    website: response.data.website,
		    resume: response.data.resume,
		    uuid: response.data.uuid
		}
	    });	    
	}).catch(function (error) {
	    console.log(error);
	});
    }

    
    render() {
	const studentForm = this.state.studentForm;
	
      	return(
      	    <div>
	      <Table striped bordered condensed hover>
		<tbody>
		  <tr>		    
		    <th>GPA?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.gpa} onChange={this.handleChange.bind(this, "gpa")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What year are you?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.year} onChange={this.handleChange.bind(this, "year")}>
			    <option>{studentForm.year}</option>
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
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>What is your major?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.major} onChange={this.handleChange.bind(this, "major")}>
			  <option>{studentForm.major}</option>
			  <option>Biology/Pre-Med</option>
			  <option>Theatre Technology</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Which university are you currently enrolled in?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.university} onChange={this.handleChange.bind(this, "university")}>
			    <option >{studentForm.university}</option>
			    <option>None</option>
			    <option>UCLA</option>
			    <option>USC</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>What is your current student status?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.student_status} onChange={this.handleChange.bind(this, "student_status")}>
			    <option>{studentForm.student_status}</option>
			    <option>Enrolled</option>
			    <option>Applying To</option>
			    <option>Enrolled and Appplyng to Switch</option>
			    <option>Enrolled and Enrolled to Switch</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>What university do you plan to work at?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.university_switch} onChange={this.handleChange.bind(this, "university_switch")}>
			    <option>{studentForm.university_switch}</option>
			    <option>UCLA</option>
			    <option>USC</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>How many hours per week can you commit to doing research?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl  value={studentForm.hours_week} onChange={this.handleChange.bind(this, "hours_week")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Do you need compensation?(paid, partial scholarship, or credit)</th>
		    <td>
		      <form>
			<FormGroup>
			  <select value={studentForm.need_pay} onChange={this.handleChange.bind(this, "need_pay")}>
			    <option>{studentForm.need_pay}</option>
			  <option>Yes</option>
			  <option>No</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Are you willing to be a TA?</th>
		    <td>
		      <form>
			<FormGroup>
			  <select value={studentForm.ta} onChange={this.handleChange.bind(this, "ta")}>
			    <option>{studentForm.ta}</option>
			    <option>Yes</option>
			    <option>No</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>
		  
		  <tr>		    
		    <th>Research Interests</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.interest} onChange={this.handleChange.bind(this, "interest")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Where do you live?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.location} onChange={this.handleChange.bind(this, "location")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  

		  <tr>
		    <th>What are your career goals?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.career} onChange={this.handleChange.bind(this, "career")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr> 
		    <th>About Me</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.about} onChange={this.handleChange.bind(this, "about")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr> 
		    <th>LinkedIn</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.linkedin} onChange={this.handleChange.bind(this, "linkedin")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr> 
		    <th>Website</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.website} onChange={this.handleChange.bind(this, "website")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>


		  <tr>		    
		    <th>Resume Upload</th>
		    <td>
		      <form>
			<FormGroup controlId='formControlsFile'>
			  <FormControl type="file" value={studentForm.resume} onChange={this.handleChange.bind(this, "resume")}/>
			  <ControlLabel>{studentForm.resume}</ControlLabel>
			</FormGroup>
		      </form>
		    </td>
		  </tr>
		</tbody>
	      </Table>
	      <Button onClick={this.handleUpdate}>Update</Button>
      	    </div>
      	);
    }
}

export default StudentEditQuestions;
