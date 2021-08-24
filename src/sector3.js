import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;
Body.Bir = styled.div`
  margin: 0px 50px;

  border: 1px solid red;
  width: 360px;
  height: 264px;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 446px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 75px 10px 10px 10px;
  display: flex;

  flex-direction: column;
`;

Body.Img = styled.img`
  border-radius: 75px 10px 75px 0px;
`;
export const Text = styled.div`
  font-family: Philosopher;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 24px;
  margin: 20px;
  display: flex;
  align-items: center;
  /* margin-top: 10px; */
  color: #150c01;
`;

Text.Dollar = styled.div`
  font-family: Philosopher;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  margin-left: auto;
  color: #150c01;
`;

Body.Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #150c01;
  opacity: 0.7;
  margin-left: 20px;
`;

export const Bott = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
`;
Bott.Bot = styled.button`
  width: 34px;
  height: 34px;
  background: #dc780b;
  border-radius: 5px;
  color: white;
  font-size: 25px;
  border: none;
  cursor: pointer;
`;

export const Yulduz = styled.div`
  margin-left: 186px;
`;
Yulduz.Img = styled.img``;
