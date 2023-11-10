import React, { useRef, useEffect } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import * as API from "../../services";
import { useSignUp } from "../context/SignUp";
import { useWindow } from "../context/Window";
import { useToken } from "../context/Token";

const SignUp = () => {
  const navigate = useNavigate();
  const nickInput = useRef();
  const passwordInput = useRef();
  const button = useRef();
  const { signedUp, setSignedUp, signingUp, setSigningUp } = useSignUp();
  const { windowSize, setWindowSize } = useWindow();
  const { token, setToken } = useToken();

  const clearInputs = () => {
    nickInput.current.value = "";
    passwordInput.current.value = "";
  };

  const handleRegister = async (nick, pswd) => {
    const res = await API.sendUser(nick, pswd, token);
    if (res.detail === undefined) {
      const json = await res.json();
      // console.log(json);
      clearInputs();
      setSignedUp(true);
      setSigningUp(false);
    } else {
      // console.log(res.detail);
    }
  };

  useEffect(() => {
    if (signedUp) {
      navigate("/login");
    }
  }, [signedUp]);

  return (
    <>
      <S.Container>
        <S.Title>
          <p style={{ lineHeight: "17vw", color: "#272932" }}>SIGN UP</p>
        </S.Title>
        <S.Body>
          <S.Input
            type="text"
            ref={nickInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                passwordInput.current.focus();
              }
            }}
          />
          <S.Input
            type="text"
            ref={passwordInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                button.current.click();
              }
            }}
          />
          <IconContext.Provider
            value={{
              color: "#9c9c9c",
            }}
          >
            <S.Button
              onClick={() => {
                handleRegister(
                  nickInput.current.value,
                  passwordInput.current.value
                );
              }}
              ref={button}
              style={{
                fontSize: `${windowSize.width > 300 ? 5 : 4}vw`,
              }}
            >
              REGISTER
            </S.Button>
          </IconContext.Provider>
        </S.Body>
      </S.Container>
    </>
  );
};

export default SignUp;
