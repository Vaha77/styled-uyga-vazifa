import React, { Component } from "react";
import { Wrapper } from "./Style";
import Navbar from "./Navbar";
import Body from "./Body.jsx";
import Sector2 from "./sector2.jsx";
import Sector3 from "./sector3.jsx";
import Sector4 from "./sector4.jsx";
import Sector5 from "./sector5.jsx";
import Sector6 from "./sector6.jsx";

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Body />
        <Sector2 />
        <Sector3 />
        <Sector4 />
        <Sector5 />
        <Sector6 />
      </Wrapper>
    );
  }
}
