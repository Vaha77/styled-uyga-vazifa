import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-bottom: 150px;
`;
Container.Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: auto;
`;
Container.Right = styled.img`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  font-family: Philosopher;
  font-style: normal;
  font-weight: bold;
  font-size: 48.83px;
  line-height: 58px;
  color: #150c01;
`;

export const Desc = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #150c01;
  opacity: 0.7;
  margin: 42px 0 50px;
`;
