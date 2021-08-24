import React, { Component } from "react";
import {
  Abaut,
  Bag,
  BagIm,
  Container,
  Feat,
  Food,
  Foods,
  Ikki,
  It,
  Itcan,
  Qu,
  Second,
  Theare,
  Uch,
  Yangi,
} from "./sector2";
import home from "./img/home.png";
import pedal from "./img/pedal.png";
import smail from "./img/home.png";
import img from "./img/qiz.png";
import { Button } from "./NavbarStyle";
export default class Sector2 extends Component {
  render() {
    return (
      <Second>
        <Container>
          <Feat>Features</Feat>
          <Food>Food with a New Passion</Food>
          <Yangi>
            <Qu>
              <Bag bgcolor="#8fa63292;">
                <BagIm src={home} />
              </Bag>
              <Food>Quality Food</Food>
              <It>
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </It>
            </Qu>
            <Qu>
              {" "}
              <Bag bgcolor="#e64d2e99;">
                <BagIm src={pedal} />
              </Bag>
              <Food>Quality Food</Food>
              <It>
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </It>
            </Qu>
            <Qu>
              {" "}
              <Bag bgcolor="#dc770b65">
                <BagIm src={smail} />
              </Bag>
              <Food>Quality Food</Food>
              <It>
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </It>
            </Qu>
          </Yangi>
        </Container>

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
