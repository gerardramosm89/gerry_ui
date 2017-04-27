import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SoloPage extends Component {
  constructor(props) {
    super(props);
    console.log("Props from Solo Child is: ", this.props);
  }
  render() {
    return (
      <div>
        <h2>Testing Solo Child Page</h2>
        <p>You are looking at post id: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default SoloPage;