import styled from "styled-components";

export const Container = styled.div`
  width: 40vw;
  max-height: 80vh;
  min-height: 30vh;
  background-color: rgba(225, 225, 225, 1);
  box-shadow: 0px 0px 12px 1px #00000029;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* margin-top: 5.5vw; */
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-self: center;
`;

export const Label = styled.div`
  width: 100%;

  /* font-size: 4rem; */
  font-size: 8vw;
  border-radius: 21px 21px 0 0;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #272932;
  text-align: center;
`;

export const Input = styled.input`
  &:focus {
    border: 5px solid rgba(30, 30, 30, 0.7);
    background-color: #272932;
    color: rgba(100, 100, 100, 1);
    border-radius: 51px;
  }

  &::placeholder {
    color: rgba(80, 80, 80, 0.2);
    font-style: italic;
  }

  transition: 0.3s;
  width: 80%;
  max-height: 25%;
  /* height: 8vw; */
  font-size: 5vw;
  text-align: center;
  margin: 3vw auto;
  padding: 3px;
  border-bottom: 5px solid rgba(150, 150, 150, 1);
  font-family: "Oswald", sans-serif;
  background-color: transparent;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
