import React, { Component } from "react";
import { Wrapper } from "./Style";
import Navbar from "./Navbar";
import Body from "./Body.jsx";
import Sector2 from "./sector2.jsx";

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Body />
        <Sector2 />
      </Wrapper>
    );
  }
}
