//@flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import foxesData from "./foxes.json";

type UserId = "01" | "02"

type Post = {
  id: string,
  userId: UserId,
  description: string,
  imageUrl: string
};

type User = {
  id: UserId,
  username: string,
};

type Props = {
  data: {
    posts: Array<Post>,
    users: Array<User>
  }
}

class App extends Component<Props> {

  render() {
    return (
      <div>
        {this.props.data.posts.map(post => this.renderPost(post))}
      </div>
    )
  }

  renderPost(post: Post) {
    const author = getUserById(this.props.data.users, post.userId)
    return (
      <div>
        <img src={post.imageUrl} key={post.id} alt={post.description}/>
        <div>{author ? author.username : "anonymous"}</div>
      </div>
    )
  }

}

function getUserById(aListOfUsers: Array<User>, theIdOfTheUserWeWant: UserId) {
  return aListOfUsers.find(myUser => myUser.id === theIdOfTheUserWeWant)
}

// function renderApp() {
//   const appRoot = document.getElementById("root");
//   appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);
// };

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);

// module.exports = {
//
// };

export {
  App,
  getUserById
}
