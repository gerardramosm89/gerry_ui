import React, { Component } from 'react';
import MyEditor from './MyEditor';

export default class Home extends Component {
  render() {
    return(
      <div>
        Home Component
        <img src="../../img/avatar3.PNG" />
        <p>nice the image loads</p>
        <div className="col-4 editor-field">
          <MyEditor />
        </div>
      </div>
    );
  }
}