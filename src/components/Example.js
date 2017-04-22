import React from 'react';
import BasicExample from './BasicExample';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        Hello from the welcome component
        <BasicExample />
      </div>
    );
  }  
}

export default Welcome;