import React, { Component } from "react";
import { Container, Logo, NavItem, Button } from "./NavbarStyle";
import logo from "./img/NavLogo1.png";

export default class Navbar extends Component {
  state = {
    isActive: "",
  };
  render() {
    return (
      <Container>
        <Logo src={logo} alt="NavLogo" />
        <NavItem
          onClick={() => this.setState({ isActive: "home" })}
          isActive={this.state.isActive === "home"}
        >
          Home
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "about" })}
          isActive={this.state.isActive === "about"}
        >
          About us
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "menu" })}
          isActive={this.state.isActive === "menu"}
        >
          Menu
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "feature" })}
          isActive={this.state.isActive === "feature"}
        >
          Featuer
        </NavItem>
        <NavItem
          onClick={() => this.setState({ isActive: "contact" })}
          isActive={this.state.isActive === "contact"}
        >
          Contact us
        </NavItem>
        <Button book bgcolor="#dc780b">
          Booking Now
        </Button>
        {/* <Button color>Booking Now</Button> */}
      </Container>
    );
  }
}
