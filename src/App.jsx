import React, { Component } from "react";
import { Wrapper } from "./Style";
import Navbar from "./Navbar";
import Body from "./Body.jsx";

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Body />
      </Wrapper>
    );
  }
}
