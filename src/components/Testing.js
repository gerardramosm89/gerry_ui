import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TestingChild from './TestingChild';

class Testing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Testing Page</div>
          <Link to="/testing/food">Food</Link>
          <Link to="/testing/Drinks">Drinks</Link>
          <Link to="/testing/papers">papers</Link>
          <Link to="/testing/computers">computers</Link>
        <Route path={'/testing/:topicId'} render={({match}) => {
          console.log("the match is: ", match);
          return (
            <div>
              <h2>test</h2>
              <p>{match.params.topicId}</p>
            </div>
          );
        }}/>
          <Route exact path={this.props.match.url} render={() => (
            <h3>Please select a topic.</h3>
          )}/>
      </div>
    );
  }
}

export default Testing;