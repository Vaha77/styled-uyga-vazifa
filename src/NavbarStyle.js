import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
`;

export const NavItem = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.isActive ? " #dc780b" : "#150c01")};
  opacity: ${(props) => !props.isActive && "0.6"};
  margin-left: 40px;
  cursor: pointer;
`;

export const logo = styled.img``;

export const getSize = (props) => {
  switch (props.type) {
    case "large":
      return "60px";
    case "medium":
      return "46px";
    case "samll":
      return "36px";
    default:
      return "60px";
  }
};

export const Button = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 5px;
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ color, bgcolor }) => (color ? bgcolor : "white")};
  border: ${({ color }) => color && "1.5px solid #dc780b"};
  cursor: pointer;
  margin-left: ${({ book }) => book && "auto"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
