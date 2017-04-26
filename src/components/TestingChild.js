import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class TestingChild extends Component {
  constructor(props) {
    super(props);
    console.log("Props from TestingChild is: ", this.props);
  }
  render() {
    return (
      <div>
        <div>Testing Child Page</div>
      </div>
    );
  }
}

export default TestingChild;