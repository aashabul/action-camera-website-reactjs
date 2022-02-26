import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const firebaseContext = useFirebase();
  return (
    <AuthContext.Provider value={firebaseContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
