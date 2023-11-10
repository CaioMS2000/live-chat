import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(140, 50, 50, 1);
  width: 90vw;
  height: 90vh;
  margin: 2vh auto 0 auto;
  border-radius: 10px;
`;

export const Messages = styled.div`
  background-color: rgba(66, 135, 245, 1);
  background-color: #707070;
  width: 100%;
  height: 92%;
  border-radius: 10px 10px 0 0;
  padding: 1vh 1vw;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.637);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(66, 66, 66, 0);
  }
`;

export const TypeSend = styled.div`
  background-color: #272932;
  width: 100%;
  height: 8%;
  border-radius: 0 0 10px 10px;
  padding: 0 1vw;
  padding-top: 3px;
`;

export const Input = styled.input`
  &:focus {
    border: 5px solid rgba(0, 0, 0, 0.7);
    background-color: rgba(20, 20, 20, 1);
    color: rgba(100, 100, 100, 1);
  }
  background-color: rgba(30, 30, 30, 1);
  width: 80%;
  height: 50%;
  font-size: 14pt;
  text-align: left;
  border-radius: 10px;
  border: 5px solid rgba(0, 0, 0, 0);
  font-family: "Oswald", sans-serif;
  margin: 0 20px 0 0;
  color: rgba(219, 219, 219, 1);
  padding: 0 5px 0 5px;
`;

export const Button = styled.button`
  background-color: rgba(25, 25, 25, 1);
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 15pt;
  font-weight: 800;
  color: rgba(100, 100, 100, 1);
  width: 10%;
  height: 80%;
  border-radius: 10px;
  &:hover {
    color: rgba(300, 300, 300, 1);
  }
`;

export const Message = styled.div`
  width: 100%;
  font-size: 16pt;
  word-wrap: break-word;
  margin: 0.5vh 0;

  p {
    text-align: left;
  }
  .nick {
    font-weight: 800;
  }
`;
