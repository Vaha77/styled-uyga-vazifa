import styled from "styled-components";

export const Second = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

export const Feat = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #dc780b;
  opacity: 0.7;
`;

export const Food = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Philosopher;
  font-style: normal;
  font-weight: bold;
  font-size: 31.25px;
  line-height: 35px;
  text-transform: capitalize;
  margin-top: 10px;
  color: #150c01;
`;

export const Ikki = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
Ikki.Left = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  color: #150c01;

  opacity: 0.7;
`;
Ikki.Body = styled.div`
  width: 748px;
  height: 64px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  text-align: center;
  margin: 0px 100px 0px 100px;

  color: #150c01;

  opacity: 0.7;
`;
Ikki.Right = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #150c01;
  opacity: 0.7;
`;

export const Uch = styled.div`
  display: flex;
  margin-top: 110px;
`;
Uch.Left = styled.img`
  width: 500px;
  height: 586px;
  border-radius: 30px;
  margin-left: 100px;
  display: flex;
  flex: 1;
`;
Uch.Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 100px;
  margin-top: 150px;
`;

export const Abaut = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #dc780b;
  opacity: 0.7;
`;

export const Foods = styled.div`
  font-family: Philosopher;
  font-style: normal;
  font-weight: bold;
  font-size: 31.25px;
  line-height: 41px;
  color: #150c01;
`;

export const Theare = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #150c01;
  opacity: 0.7;
  margin: 30px 0px 40px;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Yangi = styled.div`
  width: 1600px;
  height: 333px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Qu = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 330px;
  margin: 0 100px 0 100px;
  align-items: center;
  justify-content: center;
`;

export const Bag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  opacity: 0.9;
  background: ${({ bgcolor }) => bgcolor};
  border-radius: 50%;
`;
export const BagIm = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
`;

export const It = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #150c01;
  opacity: 0.7;
  padding-top: 20px;
`;
