import React, { Component } from 'react';
import { Col, Grid, Row, Panel, Table } from 'react-bootstrap';
//import FormInstanceCss from './FormInstance.css'

const title1 = (
    <h3>List of Results</h3>
);

const title2 = (
    <h3>Null</h3>
);

class Results extends Component {
    
    render() {

        return (
            
            <div>
              <Grid>
          	<Row>
          	  <Col xs={1}></Col>
          	  <Col className='text-center' xs={5}>
          	    <Panel header={title1} bsStyle="info">
     		      <Table striped bordered condensed hover>
			<thead>
			  <tr>
			    <th>#</th>
			    <th>First Name</th>
			    <th>Last Name</th>
			    <th>Username</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
			    <td>1</td>
			    <td>Mark</td>
			    <td>Otto</td>
			    <td>@mdo</td>
			  </tr>
			  <tr>
			    <td>2</td>
			    <td>Jacob</td>
			    <td>Thornton</td>
			    <td>@fat</td>
			  </tr>
			  <tr>
			    <td>3</td>
			    <td colSpan="2">Larry the Bird</td>
			    <td>@twitter</td>
			  </tr>
			</tbody>
		      </Table>
    		    </Panel>  
          	  </Col>
		  
          	  <Col className='text-center' xs={5}>  
          	    <Panel header={title2} bsStyle="info">
     		      Panel content
    		    </Panel>
          	  </Col>
  		  <Col xs={1}></Col>
  		</Row>
	      </Grid>
            </div>
        );

    }

    
    
}


export default Results;
