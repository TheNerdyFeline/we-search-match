import React, { Component } from 'react';
import { Col, Grid, Row, Panel} from 'react-bootstrap';
//import mission from './mission.css'

const title = (
    <h3 className='text-center'>Mission Statement</h3>
);

export default class Mission extends Component {

    render() {
	
	return (

	    <div>
	      <Grid>
          	<Row>
		  <Col xs={2}></Col>
		  <Col xs={8}>
		    <Panel header={title} className='mission' bsStyle="info">
      		      <span className='left-text'>We-Search is an application built to aide a currently unorganized system for undergraduates to find and establish research opportunities. Many professors at UCLA have a hard time finding good candidates for their research studies, due to an outdated web presence amongst other reasons. Likewise, many students do not have an established platform to submit a global resume for research opportunities. Currently, students need to look up professor information on these outdated websites to try and find a good opportunity. We-Search solves this problem by finding professors a short list of qualified and genuinely interested students for them to interview, while also giving students the ability to try and "match" with various professors. This will streamline an otherwise unorganized process. Professors will be matched with students who fit their desired criteria, and students will be matched up with professors whose research fits their interests and long term academic vision. The ultimate goal of We-Search is to promote research on campus, to make professors' workload lighter and to find blind, yet genuine research opportunities for students.</span>
   		    </Panel>
		  </Col>
		  <Col xs={2}></Col>
	        </Row>
              </Grid>
	    </div>
		);
	}

};
