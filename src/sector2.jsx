import React, { Component } from "react";
import {
  Abaut,
  Container,
  Feat,
  Food,
  Foods,
  Ikki,
  Itcan,
  Second,
  Theare,
  Uch,
} from "./sector2";
import img from "./img/qiz.png";
import { Button } from "./NavbarStyle";
export default class Sector2 extends Component {
  render() {
    return (
      <Second>
        <Feat>features</Feat>
        <Food>Food with a New Passion</Food>
        <Container>
          <Container.Left>Qualtity Food</Container.Left>

          <Container.Body>Food Delivery</Container.Body>
          <Container.Right>Super Taste</Container.Right>
        </Container>
        <Ikki>
          <Ikki.Left>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </Ikki.Left>
          <Ikki.Body>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </Ikki.Body>
          <Ikki.Right>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </Ikki.Right>
        </Ikki>

        <Uch>
          <Uch.Left src={img} />
          <Uch.Right>
            <Abaut>ABOUT US</Abaut>
            <Foods>
              Food Stalls with Persons but to Product marketing plane Product
              marketing plane catlogues etc to.
            </Foods>
            <Theare>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </Theare>
            <Button bgcolor="#DC780b">Read More</Button>
          </Uch.Right>
        </Uch>
      </Second>
    );
  }
}
