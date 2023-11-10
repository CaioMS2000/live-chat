import React from "react";
import * as S from "./styles";

export function Card({ inputs }) {
  function render() {
    return (
      <S.Container>
        <S.Label>LOGIN</S.Label>
        <S.Input placeholder="nickname"></S.Input>
        {/* <S.Label>Something2</S.Label> */}
        <S.Input placeholder="password"></S.Input>
      </S.Container>
    );
  }

  return <>{render()}</>;
}
