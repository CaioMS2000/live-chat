import React, { createContext, useState, useContext } from "react";

import * as API from "../../services";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState({ nickname: "" });
  const login = async (nick, pswd) => {
    if (typeof nick != "object") {
      const response = await API.getUserByNick(nick);
      const data = await response.json();

      if (data.detail === undefined) {
        if (data.password === pswd) {
          setLogedIn(true);
          setUser({ nickname: data.nickname });
        } else {
          setLogedIn(false);
          console.log("login falhou, a senha está errada");
        }
      } else {
        setLogedIn(false);
        console.log("login falhou, usuário não existe");
      }
    } else {
      setLogedIn(false);
      console.log("não passou nome");
    }
  };

  return (
    <LoginContext.Provider
      value={{
        logedIn,
        setLogedIn,
        login,
        user,
        setUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within a LoginProvider");
  const { logedIn, setLogedIn, login, user, setUser } = context;
  return { logedIn, setLogedIn, login, user, setUser };
}
