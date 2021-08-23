import React, { Component } from "react";
import { Body, Container, Text, Bott, Yulduz } from "./sector3";
import { Feat, Food, Ikki } from "./sector2";
import img from "./img/vegie.png";
import Rasm from "./img/yulduz.svg";
import Rasim from "./img/yulduzrangsiz.svg";
import Saled from "./img/salad.png";
import Burger from "./img/burger.png";
import Sveji from "./img/sveji.png";
import Peach from "./img/peach.png";
import Egg from "./img/egg.png";

export default class Sector3 extends Component {
  render() {
    return (
      <Container>
        <Feat>Menu</Feat>
        <Food>Food Full of treaty Love</Food>

        <Ikki>
          <Ikki.Body>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers,
          </Ikki.Body>
        </Ikki>
        <Body>
          <Body.Bir>
            <Body.Img src={img} />
            <Text>
              Vegie Muffen
              <Text.Dollar>16$</Text.Dollar>
            </Text>
            <Body.Text>
              There are many things are needed to start the Fast Food Business.
            </Body.Text>
            <Bott>
              <Bott.Bot>+</Bott.Bot>
              <Yulduz>
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasim} />
              </Yulduz>
            </Bott>
          </Body.Bir>

          <Body.Bir>
            <Body.Img src={Saled} />
            <Text>
              Salads
              <Text.Dollar>12$</Text.Dollar>
            </Text>
            <Body.Text>
              There are many things are needed to start the Fast Food Business.
            </Body.Text>
            <Bott>
              <Bott.Bot>+</Bott.Bot>
              <Yulduz>
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
              </Yulduz>
            </Bott>
          </Body.Bir>

          <Body.Bir>
            <Body.Img src={Burger} />
            <Text>
              Burger
              <Text.Dollar>10$</Text.Dollar>
            </Text>
            <Body.Text>
              There are many things are needed to start the Fast Food Business.
            </Body.Text>
            <Bott>
              <Bott.Bot>+</Bott.Bot>
              <Yulduz>
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasim} />
                <Yulduz.Img src={Rasim} />
              </Yulduz>
            </Bott>
          </Body.Bir>
        </Body>

        {/* ikkinchi sektor maenu */}
        <Body>
          <Body.Bir>
            <Body.Img src={Sveji} />
            <Text>
              Delmonico Steak dish
              <Text.Dollar>14$</Text.Dollar>
            </Text>
            <Body.Text>
              There are many things are needed to start the Fast Food Business.
            </Body.Text>
            <Bott>
              <Bott.Bot>+</Bott.Bot>
              <Yulduz>
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasim} />
                <Yulduz.Img src={Rasim} />
                <Yulduz.Img src={Rasim} />
              </Yulduz>
            </Bott>
          </Body.Bir>

          <Body.Bir>
            <Body.Img src={Egg} />
            <Text>
              Egg Masala
              <Text.Dollar>9$</Text.Dollar>
            </Text>
            <Body.Text>
              There are many things are needed to start the Fast Food Business.
            </Body.Text>
            <Bott>
              <Bott.Bot>+</Bott.Bot>
              <Yulduz>
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasim} />
              </Yulduz>
            </Bott>
          </Body.Bir>

          <Body.Bir>
            <Body.Img src={Peach} />
            <Text>
              Peach Melba dish
              <Text.Dollar>15$</Text.Dollar>
            </Text>
            <Body.Text>
              There are many things are needed to start the Fast Food Business.
            </Body.Text>
            <Bott>
              <Bott.Bot>+</Bott.Bot>
              <Yulduz>
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasm} />
                <Yulduz.Img src={Rasim} />
                <Yulduz.Img src={Rasim} />
              </Yulduz>
            </Bott>
          </Body.Bir>
        </Body>
      </Container>
    );
  }
}
