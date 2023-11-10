import React, { useRef, useEffect, useState } from "react";
import { IconContext } from "react-icons";

import * as S from "./styles";
import * as API from "../../services";
import { useMessage } from "../context/Message";
import { useLogin } from "../context/Login";
import { useToken } from "../context/Token";

const ws = new WebSocket(`ws://localhost:8000/ws/`);
// const ws = new WebSocket(`wss://my-web-chat-0.herokuapp.com/ws/`);
// const date = new Date();
// const socket_id = `${date.getFullYear()}${
//   date.getMonth() + 1
// }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;

const Chat = () => {
  const { message, setMessage } = useMessage({});
  const { user } = useLogin();
  const input = useRef();
  const button = useRef();
  const messageScreen = useRef();
  const [loadedMessages, setMessages] = useState([]);
  const { token, setToken } = useToken();

  const renderMessages = () => {
    const res = loadedMessages.map((e, i) => {
      return (
        <S.Message className="message" key={i}>
          <p>
            <span className="nick">{e.user}</span>:<span>&nbsp;&nbsp;</span>
            {e.content}
          </p>
        </S.Message>
      );
    });

    return res;
  };

  const scrollToBottom = () => {
    messageScreen.current.scrollTop = messageScreen.current.scrollHeight;
  };

  const getMessages = async () => {
    const res = await API.getMessages(token);
    const data = await res.json();

    // console.log(data);
    // console.log("\n\n\n");

    if (data.detail === undefined) {
      data.forEach(async (element) => {
        const r = await API.getUserById(element.owner.id, token);
        const d = await r.json();
        const aux = { content: element.content, user: d.nickname };
        // console.log(aux);

        // ws.send(JSON.stringify(aux));
        setMessages((prevState) => prevState.concat(aux));
      });
    }
  };

  const sendMessage = async (msg) => {
    const response = await API.getUserByNick(user.nickname, token);
    const data = await response.json();

    if (data?.detail === undefined) {
      API.sendMessage(data.id, msg, token);
      msg = JSON.stringify({ content: `${msg}`, user: data.nickname });
      ws.send(msg);
      console.log(`WS: a mensagem ${msg} foi enviada`);
    }
  };

  // mount and update
  // useEffect(() => {
  //     console.log("mounted or updated")
  // })

  // mounted
  // useEffect(() => {
  //     console.log("mounted")
  // }, [])

  useEffect(() => {
    getMessages();

    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [loadedMessages]);

  useEffect(function () {
    ws.onopen = function () {
      // console.log("React is connected");
    };

    ws.onmessage = function (event) {
      // setMessages(loadedMessages.concat(JSON.parse(event.data)));
      console.log(`WS: chegou ${event.data}`);
      setMessages((prevState) => prevState.concat(JSON.parse(event.data)));
    };
  });

  return (
    <S.Container className="Chat-Container">
      <IconContext.Provider value={{ color: "#9c9c9c", size: "50px" }}>
        <S.Messages ref={messageScreen}>{renderMessages()}</S.Messages>
        <S.TypeSend>
          <S.Input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                button.current.click();
              }
            }}
            ref={input}
          />
          <S.Button
            ref={button}
            onClick={() => {
              sendMessage(input.current.value);
              input.current.value = "";
            }}
          >
            Send
          </S.Button>
        </S.TypeSend>
      </IconContext.Provider>
    </S.Container>
  );
};

export default Chat;
