import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
class SoloPage extends Component {
  constructor(props) {
    super(props);
    console.log("Props from Solo Child is: ", this.props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get('http://reduxblog.herokuapp.com/api/posts').then(data => {
      console.log(data.data);
      this.setState({
        posts: data.data
      })
    });
  }
  renderPosts() {
    return this.state.posts.map(post => {
      return (
      <div key={post.id}>
        <h1>Title: {post.title}</h1>
        <h5>Content: {post.content}</h5>
      </div>);
    });
  }
  render() {
    return (
      <div>
        <h2>Testing Solo Child Page</h2>
        <p>You are looking at post id: {this.props.match.params.id}</p>
        {this.renderPosts()}
      </div>
    );
  }
}

export default SoloPage;