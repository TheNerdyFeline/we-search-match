import React, { Component } from 'react';

// import children components
import NavbarComponent from '../Nav/NavbarComponent';
import FormInstance from './FormInstance';
import Mission from '../Mission/Mission';
//import PubCounter from '../PubCounter/PubCounter';
//import "./FormInstance.css";
//import "../PubCounter/PubCounterCss.css";
import "../Mission/mission.css";

export default class Login extends Component {
	render() {
		return (
			<div>
			  <NavbarComponent/>
			  <FormInstance />
			  <Mission />
			</div>
		);
	}	
};
