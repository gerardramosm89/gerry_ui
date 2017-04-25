import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.currentData = [
      {
        name: "Gerry",
        hobbies: "Developing"
      },
      {
        name: "Chris",
        hobbies: "Photography"
      }
    ];
  }

  renderList() {
    console.log(this.currentData);
    return this.currentData.map((user) => {
      return (
        <div key={user.name}>{user.name}</div>
      );
    })
  }

  refSubmit() {
    if (this.textInput.value !== '') {
      console.log(this.textInput.value);
      console.log(this.currentData);
      this.currentData.push({ name: this.textInput.value });
      this.forceUpdate();
    }
  }

  handleEnter(e) {
    if (e.charCode==13) {
      if (this.textInput.value !== '') {
        console.log("Enter clicked!");
        this.currentData.push({ name: this.textInput.value });
        this.textInput.value = '';
        this.forceUpdate();
      }
    }
  }
  render() {
    return (
      <div>
        <h1>About Component</h1>
        {this.renderList()}
        <h1>Input using refs</h1>
        <input type="text" ref={(input) => {this.textInput = input}} onKeyPress={this.handleEnter.bind(this)}/>
        <input type="button" value="Show the text input" onClick={this.refSubmit.bind(this)} />
      </div>
    );
  }
}

export default About;