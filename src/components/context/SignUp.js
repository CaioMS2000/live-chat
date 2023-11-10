import React, { createContext, useState, useContext, useEffect } from "react";

const SignUpContext = createContext();

export function SignUpProvider({ children }) {
  const [signedUp, setSignedUp] = useState(false);
  const [signingUp, setSigningUp] = useState(false);

  return (
    <SignUpContext.Provider
      value={{
        signedUp, setSignedUp, signingUp, setSigningUp
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export function useSignUp() {
  const context = useContext(SignUpContext);
  if (!context) throw new Error("useSignUp must be used within a SignUpProvider");
  const { signedUp, setSignedUp, signingUp, setSigningUp } = context;
  return { signedUp, setSignedUp, signingUp, setSigningUp };
};
