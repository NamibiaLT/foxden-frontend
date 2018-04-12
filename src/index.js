//@flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import foxesData from "./foxes.json";

type Post = {
  id: string,
  userId: string,
  description: string,
  imageUrl: string
};

type User = {
  id: string,
  username: string
};

type Props = {
  data: {
    posts: Array<Post>,
    users: Array<User>
  }
}

class App extends Component<Props> {

  render() {
    return this.props.data.posts.map(post => this.renderPost(post))
  }

  renderPost(post: Post) {
    return (
    <img src={post.imageUrl}/>
    )
  }
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);

module.exports = {
  renderPost
};
