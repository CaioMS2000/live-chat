import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  height: 60vw;
  background-color: rgba(200, 200, 200, 1);
  box-shadow: 0px 0px 12px 1px #00000029;
  margin: 0 auto;
  margin-top: 5vh;
  border-radius: 21px;
`;

export const Title = styled.div`
  background-color: rgba(250, 234, 127, 0);
  width: 100%;
  height: 30%;
  font-size: 10vw;
  border-radius: 21px 21px 0 0;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: rgba(82, 82, 82, 1);
`;

export const Body = styled.div`
  background-color: rgba(200, 234, 127, 0);
  width: 100%;
  height: 70%;
  border-radius: 0 0 21px 21px;
`;

export const Input = styled.input`
  &:focus {
    border: 5px solid rgba(30, 30, 30, 0.7);
    background-color: rgba(50, 50, 50, 1);
    background-color: #272932;
    color: rgba(100, 100, 100, 1);
  }
  transition: 0.3s;
  background-color: rgba(100, 100, 100, 1);
  width: 90%;
  height: 25%;
  height: 8vw;
  font-size: 5vw;
  text-align: center;
  margin: 3vw 0;
  border-radius: 51px;
  border: 5px solid rgba(0, 0, 0, 0);
  font-family: "Oswald", sans-serif;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
