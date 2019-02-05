import React, { Component } from 'react';
// import logo from './../../logo.svg';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ToDo from './../ToDo'
import Listing from './../Listing'
import Todo from './../ToDo';

class JobProgress extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
                <Route exact path="/" component={Todo} />
                <Route path="/todo" component={ToDo} />
                <Route path="/listing" component={Listing} />
            </Switch>
          </Router>
        </header>	
      </div>
    );
  }
}

export default JobProgress;
