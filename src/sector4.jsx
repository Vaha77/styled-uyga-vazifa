import React, { Component } from "react";
import { Desc } from "./Bodystle";
import { Button } from "./NavbarStyle";
import { Contikki, Knop, Lear, Stell, Take, Tort } from "./sector4";
import phone from "./img/phone.png";
export default class Sector4 extends Component {
  render() {
    return (
      <Tort>
        <Lear>Learn More</Lear>
        <Contikki>
          <Contikki.Left>
            <Take>TAKE Away</Take>
            <Stell>
              Food Stalls with Persons but to Product marketing plane but to .
            </Stell>
            <Desc>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipmentwith Persons but also Just Food Stalls with
              specialized equipmentwith Persons but Persons.
            </Desc>
            <Knop>
              <Button bgcolor="#150C01">App Store</Button>
              <Button color>Google Play</Button>
            </Knop>
          </Contikki.Left>
          <Contikki.Riht src={phone} />
        </Contikki>
      </Tort>
    );
  }
}
