//@flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import foxesData from "./foxes.json";

class App extends Component {
  render() {
    return <div>Hello World!</div>;
    console.log(this.props.data)
  }
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App foxesData="data" />, appRoot);
