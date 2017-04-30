import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import About from './About';
import RouteParams from './RouteParams';
import Testing from './Testing';
import SoloPage from './SoloPage';
import TestResource from './protectedResources/TestResource';
import BlogsPage from './BlogsPage';
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const BSTemplate = ({ match }) => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">Home</Link>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <Link className="dropdown-item" to="/signin">Sign In</Link>
              <Link className="dropdown-item" to="/blogs">Blogs Page</Link>
              <Link className="dropdown-item" to="/testing">Testing Routes</Link>
              <Link className="dropdown-item" to="/protected">Protected Resources</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

const Child = ({ match }) => (
  <div>
    <h3>Path you are currently on is: {match.params.id}</h3>
  </div>
);
const Navbar = () => (
  <Router>
    <div>
      <BSTemplate />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/testing" component={Testing} />
        <Route path="/testing/inline" render={() => <div>from inline</div>} />
        <Route path="/blogs/:id" component={SoloPage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/protected" component={TestResource} />
        <Route render={() => <h1>Domain not found</h1>} />
      </Switch>
    </div>
  </Router>
)



export default Navbar