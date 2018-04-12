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
  constructor(props) {
    super(props);
    this.state = {
  //     value: null
  //   }
  // }
  render() {
    console.log(this.state.value);
    return <div>Hello World!</div>
  }
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);
