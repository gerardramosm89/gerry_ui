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
    // console.log("Props from Solo Child is: ", this.props);
    this.state = {
      post: {}
    }
  }
  componentWillMount() {
    axios.get(`http://reduxblog.herokuapp.com/api/posts/${this.props.match.params.id}`).then(data => {
      console.log(data);
      this.setState({
        post: data.data
      }, () => {
        console.log(this.state.post);
      });
    });
  }
  renderPosts() {
    return (
      <div>
        <p>Title is: {this.state.post.title}</p>
        <p>Content is: {this.state.post.content}</p>
      </div>
    );
    /*return this.state.posts.map(post => {
      return (
      <div key={post.id}>
        <h1>Title: {post.title}</h1>
        <h5>Content: {post.content}</h5>
      </div>);
    });*/
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