import React, { Component } from "react";
import { Desc } from "./Bodystle";
import { Feat, Food, Ikki } from "./sector2";
import { Container, Me, You, Yul } from "./sector5";
import me from "./img/me.jpg";
import Rasm from "./img/yulduz.svg";
import Rasim from "./img/yulduzrangsiz.svg";
export default class Sector5 extends Component {
  render() {
    return (
      <Container>
        <Feat>Testimonial</Feat>
        <Food>Making Food great again and again</Food>
        <You>
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          to make your.
        </You>
        <Me src={me} />
        <You>
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          very successful to make your.
        </You>
        <Yul>
          <Yul.Img src={Rasm}></Yul.Img>
          <Yul.Img src={Rasm}></Yul.Img>
          <Yul.Img src={Rasm}></Yul.Img>
          <Yul.Img src={Rasm}></Yul.Img>
          <Yul.Img src={Rasim}></Yul.Img>
        </Yul>
        <Food>Augusta W. Reynoso</Food>
        <Ikki.Body>UI&UX DeSIGNER</Ikki.Body>
      </Container>
    );
  }
}
