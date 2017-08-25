import React, { Component } from 'react';
import { Col, Grid, Row, Panel, PageHeader} from 'react-bootstrap';
//import PubCounterCss from './PubCounterCss.css'

const title = (
    <h3 className='text-center'>Publication Counter</h3>
);

export default class PubCounter extends Component {
    render() {
	return (
	    <div>
	      <Grid>
          	<Row>
		  <Col xs={2}></Col>
		  <Col xs={8}>
		    <Panel header={title} className='mission' bsStyle="info">
		      <PageHeader className='pubs text-center'>Example page header</PageHeader>
		    </Panel>
		  </Col>
		  <Col xs={2}></Col>
	        </Row>
              </Grid>
	    </div>
	);
    }

}
