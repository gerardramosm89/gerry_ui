import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.currentData = [];
    this.state = {
      selectedValue: 'Select a value to change this',
      sliderValue: null
    };
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
      this.textInput.value = '';
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
  selectValue(e) {
    e.preventDefault();
    console.log("select value was attempted");
    this.setState({ selectedValue: e.target.value })
  }

  // Render Value
  renderSelectedValue() {
    return <div>{this.state.selectedValue}</div>
  }

  sliderChange(e) {
    console.log(e.target.value);
    document.body.querySelector('.bar-fill').style.width = e.target.value;
    this.setState({
      sliderValue: e.target.value
    }, () => console.log("sliderValue Updated"));
  }
  renderSliderValue() {
    return <div>{this.state.sliderValue}</div>
  }
  render() {
    return (
      <div>
        <h1>List of users will render below</h1>
        {this.renderList()}
        <h1>Input using refs</h1>
        <input type="text" ref={(input) => {this.textInput = input}} onKeyPress={this.handleEnter.bind(this)}/>
        <input type="button" value="Show the text input" onClick={this.refSubmit.bind(this)} />
        <h2>Select a value!</h2>
          <h5>So below will show the selected value using react component state and events</h5>
          <select value={this.state.selectedValue} onChange={this.selectValue.bind(this)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        <h5>The selected value is: {this.renderSelectedValue()}</h5>
        <h2>Select a value from the slider</h2>
        <div className="col-3">
          <input type="range" onChange={this.sliderChange.bind(this)} className="form-control" name="quantity" min="1" max="100" step="1"/>
        </div>
        {this.renderSliderValue()}
        <div className="barParent">
          <div style={{width: this.state.sliderValue + "%"}}className="bar-fill"></div>
        </div>
      </div>
    );
  }
}

export default About;