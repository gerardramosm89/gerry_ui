import React, { Component } from 'react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '' 
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ 
      [name]: value
    }, () => {
      // console.log(this.state.email);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("The current state is: ", this.state);
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="col-6 offset-3">
          <form onSubmit={this.handleSubmit} className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input name="email" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Email address" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" onChange={this.handleInputChange} type="password" id="inputPassword" className="form-control" placeholder="Password" />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
          </div>

        </div>
      </div>
    );
  }
}