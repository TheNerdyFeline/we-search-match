import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Col, Grid, Row, Jumbotron, Panel, Table } from 'react-bootstrap';
import axios from "axios";
import Nav from '../Nav/NavbarComponent';
import ProfessorEditQuestions from './EditQuestions/ProfessorEditQuestions';
import StudentEditQuestions from './EditQuestions/StudentEditQuestions';
import match from './match';


const title1 = (
    <h3>Best Matches</h3>
);

const title2 = (
    <h3>Edit Personal Info</h3>
);


const title4 = (
    <h3>Edit Question Answers</h3>
);

class Dashboard extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    user: {
		first_name: this.props.location.firstName,
		last_name: this.props.location.lastName,
		email: this.props.location.email,
		uuid: this.props.location.userId,
		studProf: this.props.location.studProf
	    },
	    students: {},
	    professors: {}
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleUpdate = this.handleUpdate.bind(this);
	this.bestMatch = this.bestMatch.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
	if(prevProps.user === this.state.user) {
	    this.setState({user: this.state.user});
	}
    }

    handleChange(property, e) {
	const user = this.state.user;
	user[property] = e.target.value;
	this.setState({ user: user});
    } 

    handleUpdate(e) {
	e.preventDefault();
	console.log("update user with:", this.state.user);
	axios.put('/api/updateuser', {
	    user: this.state.user
	}).then(response => {
	    console.log(response);
	}).catch(err => {
	    console.log(err);
	});
    }
    
    bestMatch() {
    	axios.get('/api/allstudents', {
	}).then(response => {
	    console.log(response);
	    this.setState({students: response.data});
	    axios.get('/api/allprofessors', {  
	}).then(response => {
	    console.log(response);
	    this.setState({professors: response.data});
	    match.findMatch(this.state.students, this.state.professors).then( response => {
	    console.log(response);
	    }).bind(this);
	}).catch(err => {
	    console.log(err);
	});
	});
    }
    
    render() {
	const studProf = this.state.user.studProf;
	const user = this.state.user;
	return (
	    
	    <div>
	      <Nav />
	      <Grid>
		<Row>
		  <Col xs={1}></Col>
		  <Col xs={10}>
		    <Jumbotron className="jumbotron">
		      <h2 className="text-center">Dashboard</h2>		      
		    </Jumbotron>
		  </Col>
		  <Col xs={1}></Col>
		</Row>
		<Row>
		  <Col xs={1}></Col>
		  <Col className='text-center' xs={10}>	    
          	    <Panel header={title1} bsStyle="info">
     		      <Button onClick={this.bestMatch}>Find Best Matches</Button>
    		    </Panel>
		  </Col>
		  <Col xs={1}></Col>
		</Row>
		<Row>
		  <Col xs={1}></Col>
		  <Col className='text-center' xs={10}>		    
          	    <Panel header={title2} bsStyle="info">
     		      <Table striped bordered condensed hover>
			<tbody>
			  <tr>			    
			    <th>First Name:</th>
			    <td>
			      <form>
				<FormGroup>
      				  <FormControl type="text" value={user.first_name} onChange={this.handleChange.bind(this, "first_name")} />
    				</FormGroup>
    			      </form>
			    </td>
			  </tr>
			  
			  <tr>			    
			    <th>Last Name:</th>
			    <td>
			      <form>
				<FormGroup>
      				  <FormControl type="text" value={user.last_name} onChange={this.handleChange.bind(this, "last_name")} />
    				</FormGroup>
    			      </form>
			    </td>
			  </tr>

			  <tr>			    
			    <th>Email:</th>
			    <td>
			      <form>
				<FormGroup>
      				  <FormControl type="text" value={user.email} onChange={this.handleChange.bind(this, "email")} />
    				</FormGroup>
    			      </form>
			    </td>
			  </tr>			  
			</tbody>
		      </Table>
		      <Button onClick={this.handleUpdate}>Update</Button>
    		    </Panel>
         	    
		  </Col>
  		  <Col xs={1}></Col>
  		</Row>
  		<Row>
		  <Col xs={1}></Col>
		  <Col className='text-center' xs={10}>  
          	    <Panel header={title4} bsStyle="info">
     		      {/* insert correct component here based on state */}
		      {studProf === "Student" ? (
			  <StudentEditQuestions setState={this.props.uuid}/>
		      ) : (<ProfessorEditQuestions setState={this.props.uuid}/>
			  )}
    	    </Panel>	
		</Col>
  		<Col xs={1}></Col>
  		</Row>
		</Grid>
		</div>

	);

    }



}


export default Dashboard;
