import React, { Component } from 'react';
import axios from 'axios';



export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      error: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.API_URL = 'http://localhost:3050/api/userauth';
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      error: null
    });
    this.setState({ 
      [name]: value
    }, () => {
      // console.log(this.state.email);
    });
  }
  renderEmail() {
    return (
      <div>
        {this.state.error}
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("The current state is: ", this.state);
    if (this.state.email === '' || this.state.password === '') {
      this.setState({
        error: "Email and password required"
      })
    } else {
      console.log("Email and password received");
      let query = { username: this.state.email, password: this.state.password };
      console.log('The query is: ', query);
      axios.post('http://localhost:3050/api/userauth', query)
        .then((response) => console.log(response))
        .catch((err) => console.log("error: ", err));
    }
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="col-6 offset-3">
            {this.renderEmail()}
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