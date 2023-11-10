import styled from "styled-components";

export const Container = styled.div`
  color: #000;
  font-family: "Oswald", sans-serif;
  background-color: rgba(150, 150, 150, 1);
  box-shadow: 0px 0px 12px 1px #00000029;
  width: 50vw;
  height: 25vw;
  margin: 25vh auto 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: rgba(150, 150, 150, 1);
  width: 20vw;
  height: 6vh;
  margin: 2vh auto;
  line-height: 6vh;
  border-radius: 10px;
  cursor: pointer;
  font-size: 4vw;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: rgba(181, 181, 181, 1);
    background-color: rgba(71, 71, 71, 1);
    background-color: #272932;
  }
`;

export const Label = styled.div`
  font-weight: 800;
  font-size: 6vw;
  width: 100%;
  background-color: rgba(150, 150, 150, 1);
  line-height: 10vh;
  border-radius: 10px 10px 0 0;
`;
