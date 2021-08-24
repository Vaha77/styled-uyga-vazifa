import React, { Component } from "react";
import { Button } from "./NavbarStyle";
import { Feat, Food } from "./sector2";
import { Container, Input, Kit, Nput, Sen } from "./sector6";

export default class Sector6 extends Component {
  render() {
    return (
      <Container>
        <Feat>contact</Feat>
        <Food>
          Food Stalls with Persons but also specialized
          <br />
          equipment, Skills to manage.
        </Food>
        <Nput>
          <Input placeholder="Enter your message" s></Input>
          <Sen>send</Sen>
        </Nput>
      </Container>
    );
  }
}
