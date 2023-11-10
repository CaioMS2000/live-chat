import React, { createContext, useState, useContext } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const context = useContext(MessageContext);
  if (!context)
    throw new Error("useMessage must be used within a MessageProvider");
  const { message, setMessage } = context;
  return { message, setMessage };
}
