import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import components to render
import Login from './components/Login/Login';
import StudentQuestions from './components/Questions/Student-Questions';
import Signup from './components/Signup/Signup';
import Results from './components/Results/Result';
import ProfQuestions from './components/Questions/Prof-Questions';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => (
    <Router>
      <Switch>
	<Route exact path="/" component={Login} />
	<Route path="/studentquestions" component={StudentQuestions} />
	<Route path="/profquestions" component={ProfQuestions} />
	<Route path="/signup" component={Signup} />
	<Route path="/results" component={Results} />
	<Route path="/dashboard" component={Dashboard} />
	<Route path="/login" />
	<Route path="/signout" />
      </Switch>
    </Router>
);

export default App;
