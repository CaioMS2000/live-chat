import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { LoginProvider } from "./components/context/Login";
import { SignUpProvider } from "./components/context/SignUp";
import { MessageProvider } from "./components/context/Message";
import { WindowProvider } from "./components/context/Window";
import { TokenProvider } from "./components/context/Token";

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
      <WindowProvider>
        <LoginProvider>
          <SignUpProvider>
            <MessageProvider>
              <App />
            </MessageProvider>
          </SignUpProvider>
        </LoginProvider>
      </WindowProvider>
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
