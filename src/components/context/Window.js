import React, { createContext, useState, useContext, useEffect } from "react";

const WindowContext = createContext();

export function WindowProvider({ children }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  return (
    <WindowContext.Provider
      value={{
        windowSize,
        setWindowSize,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindow() {
  const context = useContext(WindowContext);
  if (!context)
    throw new Error("useWindow must be used within a WindowProvider");
  const { windowSize, setWindowSize } = context;

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, setWindowSize };
}
