import React, { Component } from 'react';

export default class SignIn extends Component {
  componentDidMount() {
    document.body.querySelector('#inputEmail').focus();
  }
  handleSubmit(e) {
    e.preventDefault()
    let email = e.target.inputEmail.value;
    let password = e.target.inputPassword.value;
    if (email) {
      console.log("The email is: ", e.target.inputEmail.value);
      console.log("The password is: ", e.target.inputPassword.value);    
      console.log("Form was submitted");
      e.target.inputEmail.value = '';
      e.target.inputPassword.value = '';
      e.target.inputEmail.focus();
    }


  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="col-6 offset-3">
          <form onSubmit={this.handleSubmit} className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="text" id="inputEmail" className="form-control" placeholder="Email address" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
            <div className="checkbox">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
          </div>

        </div>
      </div>
    );
  }
}