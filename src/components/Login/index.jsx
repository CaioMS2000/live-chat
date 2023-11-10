import React, { useRef, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import * as API from "../../services";
import { useLogin } from "../context/Login";
import { useWindow } from "../context/Window";
import { useToken } from "../context/Token";

const Login = () => {
  const navigate = useNavigate();
  const nickInput = useRef();
  const passwordInput = useRef();
  const button = useRef();
  const { logedIn, setLogedIn, login, user, setUser } = useLogin();
  const { windowSize, setWindowSize } = useWindow();
  const { token, setToken } = useToken();

  const handleLogin = async (n, p) => {
    // await login(n, p);
    const res = await API.getToken(n, p);

    if (res.ok) {
      const data = await res.json();
      // console.log(data);
      setToken(data.access_token);
      setLogedIn(true);
      setUser({ nickname: n });
    } else {
      console.log("erro ao buscar o token");
    }
  };

  useEffect(() => {
    if (logedIn) {
      navigate("/chat");
    }
  }, [logedIn]);

  return (
    <>
      <S.Container className="container">
        <S.Title className="title">
          <p style={{ lineHeight: "17vw", color: "#272932" }}>LOGIN</p>
        </S.Title>
        <S.Body className="body">
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
              color: "#5c5a5a",
              size: `${windowSize.width > 554 ? 10 : 7}vw`,
            }}
          >
            <S.Button
              onClick={() =>
                handleLogin(
                  nickInput.current.value,
                  passwordInput.current.value
                )
              }
              ref={button}
            >
              <BsArrowRightSquareFill
              // style={{ width: "30vw", height: "10vh" }}
              />
            </S.Button>
          </IconContext.Provider>
        </S.Body>
      </S.Container>
    </>
  );
};

export default Login;
