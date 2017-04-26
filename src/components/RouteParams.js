import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RouteParams extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return(
      <div>
        <h1>Route params</h1>a
        <h5>Current Param is: {this.props.match.params.id}</h5>
      </div>

    );
  }
}

export default RouteParams;