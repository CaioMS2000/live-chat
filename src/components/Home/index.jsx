import React from "react";

import * as S from "./styles";
import { _Link } from "../styles/Global";
import { useSignUp } from "../context/SignUp";

const Home = () => {
  const { signedUp, setSignedUp, signingUp, setSigningUp } = useSignUp();

  return (
    <S.Container>
      <S.Label>LIVE CHAT</S.Label>
      <S.Button
        onClick={() => {
          setSignedUp(true);
          setSigningUp(false);
        }}
      >
        <_Link to="/login">LOGIN</_Link>
      </S.Button>
      <S.Button
        onClick={() => {
          setSignedUp(false);
          setSigningUp(true);
        }}
      >
        <_Link to="/signup">SIGN UP</_Link>
      </S.Button>
    </S.Container>
  );
};

export default Home;
