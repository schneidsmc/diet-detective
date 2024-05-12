import React, { createContext, useState, useContext } from "react";
import Auth from "../utils/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  const login = (idToken) => {
    Auth.login(idToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    Auth.logout();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
