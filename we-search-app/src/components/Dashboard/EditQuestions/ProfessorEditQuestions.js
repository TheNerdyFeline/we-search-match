import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Table } from 'react-bootstrap';
import axios from "axios";

class ProfessorEditQuestions extends Component {
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
		pay_postion: "",
		ta: "",
		interest: "", 
		location: "", 
		available: "",
		about: '',
		linkedin: "",
		uuid: this.props.uuid
	    }
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(property, e) {	
	const profForm = this.state.profForm;
	profForm[property] = e.target.value;
	this.setState({ profForm: profForm});
    }

    handleUpdate(event) {
	event.preventDefault();
    	axios.put('/api/updateprofessorform', {
            profForm: this.state.profForm
	}).then(response => {
	    if(response.data === "ok") {
	    }
	}).catch(function (error) {
            console.log(error);
	});
    }

    componentWillMount() {
	axios.get("/api/professorform", {
	}).then(response => {
	    this.setState({
		profForm: {
		    min_gpa: response.data.min_gpa,
		    min_year: response.data.min_year,
		    field: response.data.field,
		    university: response.data.university,
		    student_status: response.data.student_status,
		    help_get_in: response.data.help_get_in,
		    hours_week: response.data.hours_week,
		    pay_position: response.data.pay_position,
		    ta: response.data.ta,
		    interest: response.data.research_interest, 
		    location: response.data.location, 
		    available: response.data.available,
		    about: response.data.about,
		    linkedin: response.data.linkedin,
		    uuid: response.data.uuid
		}
	    });
	    console.log(this.state.profForm);
	}).catch(function (error) {
	    console.log(error);
	});
    }
    
    render() { 
	const profForm = this.state.profForm;
	
      	return(

      	    <div>
	      <Table striped bordered condensed hover>
		<tbody>
		  <tr>
		    <th>What is the minium GPA you are look for?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.min_gpa} onChange={this.handleChange.bind(this, "min_gpa")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What year does a student need to be, to be eligible?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.min_year} onChange={this.handleChange.bind(this, "min_year")}>
			    <option>{profForm.min_year}</option>
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
		    <th>What field do you work in?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.field} onChange={this.handleChange.bind(this, "field")}>
                            <option>{profForm.field}</option>
                            <option>Medical/Pre-med</option>
                            <option>Theatre</option>
                          </select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Which univeristy are you affiliated with?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
                          <select value={profForm.university} onChange={this.handleChange.bind(this, "university")}>
                            <option>{profForm.university}</option>
                            <option>UCLA</option>
                            <option>USC</option>
                          </select>                        
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What status does a student need to be?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
                          <select value={profForm.student_status} onChange={this.handleChange.bind(this, "student_status")}>
                            <option>{profForm.student_status}</option>
                            <option>Enrolled At Your University</option>
			    <option>Applying To Your University</option>
			    <option>Enrolled and Appplyng to Switch To Your University</option>
			    <option>Enrolled and Enrolled to Switch To Your University</option>
                          </select>                        
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Can you help a student get into your program?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.help_get_in} onChange={this.handleChange.bind(this, "help_get_in")}>
			    <option>{profForm.help_get_in}</option>
			    <option>Yes</option>
			    <option>No</option>
			  </select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>How many hours per week do students need to be available to do research?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.hours_week} onChange={this.handleChange.bind(this, "hours_week")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Do you provide compensation(pay check, partial scholarship, or credit)?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.pay_position} onChange={this.handleChange.bind(this, "pay_position")}>
			    <option>{profForm.pay_position}</option>
			    <option>Yes</option>
			    <option>No</option>
			  </select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Are your students required to work as a Teaching Assistants?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.ta} onChange={this.handleChange.bind(this, "ta")}>
			    <option>{profForm.ta}</option>
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
			  <FormControl type="text" value={profForm.interest} onChange={this.handleChange.bind(this, "interest")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Where do you live?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.location} onChange={this.handleChange.bind(this, "location")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Do you have any openings in you research department?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.available} onChange={this.handleChange.bind(this, "available")}>
			    <option>{profForm.available}</option>
			    <option>Yes</option>
			    <option>No</option>
			  </select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>About Me</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.about} onChange={this.handleChange.bind(this, "about")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>LinkedIn</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.linkedin} onChange={this.handleChange.bind(this, "linkedin")}/>
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


export default ProfessorEditQuestions;
