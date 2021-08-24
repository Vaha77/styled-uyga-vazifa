import React, { Component } from "react";
import { Logo } from "./NavbarStyle";
import {
  Chung,
  Kit,
  LogoImgKit,
  LogoRamka,
  Ramk,
  Ramka,
  Tekst,
  Teksts,
} from "./sector6";
import logo from "./img/NavLogo1.png";
import ins from "./img/In.png";

export default class Sector extends Component {
  render() {
    return (
      <Kit>
        <Chung>
          <Ramk>
            <Ramka>
              <LogoRamka>
                {" "}
                <Logo src={logo} />
              </LogoRamka>

              <Tekst>www.WebBrain-Academy.uz</Tekst>
              <Tekst>webbrainacedmy@gmail.com</Tekst>
              <Tekst>Phone: +821024321292</Tekst>
            </Ramka>
          </Ramk>
          <Ramk>
            <Ramka>
              <Teksts>Home</Teksts>
              <Tekst>Landingpage</Tekst>
              <Tekst>Documentation</Tekst>
              <Tekst>Referral Program</Tekst>
              <Tekst>UI & UX Design</Tekst>
              <Tekst>Web Design</Tekst>
            </Ramka>
          </Ramk>
          <Ramk>
            <Ramka>
              <Teksts>Menu</Teksts>
              <Tekst>Landingpage</Tekst>
              <Tekst>Documentation</Tekst>
              <Tekst>Referral Program</Tekst>
              <Tekst>UI & UX Design</Tekst>
              <Tekst>Web Design</Tekst>
            </Ramka>
          </Ramk>
          <Ramk>
            {" "}
            <Ramka>
              <Teksts>Company</Teksts>
              <Tekst>Landingpage</Tekst>
              <Tekst>Documentation</Tekst>
              <Tekst>Referral Program</Tekst>
              <Tekst>UI & UX Design</Tekst>
              <Tekst>
                <LogoImgKit src={ins} />
                <LogoImgKit src={ins} />
                <LogoImgKit src={ins} />
                <LogoImgKit src={ins} />
              </Tekst>
            </Ramka>
          </Ramk>
        </Chung>
      </Kit>
    );
  }
}
