import React, { Component } from "react";
import { Container, Content, Desc } from "./Bodystle";
import img from "./img/body1.png";
import { Button, ButtonWrapper } from "./NavbarStyle";

export default class Body extends Component {
  render() {
    return (
      <Container>
        <Container.Left>
          <Content>
            Making time a good time by making food the good food.
          </Content>
          <Desc>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </Desc>
          <ButtonWrapper>
            <Button bgcolor="#DC780b">Order Now</Button>
            <Button color>Food Detailes</Button>
          </ButtonWrapper>
        </Container.Left>
        <Container.Right src={img} />
      </Container>
    );
  }
}
