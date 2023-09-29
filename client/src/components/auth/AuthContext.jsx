import { createContext, useContext, useState } from 'react';
import axios from "axios";
import { Navigate } from "react-router-dom"

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const login = (url, data) => {
    axios
      .post(url, data)
      .then((response) => {
        console.log("login res", response)
        window.location = "/account"
      })
      .catch((err) => {
        console.error("login POST: ERROR", err);
      });
  };

  const logout = () => {
    
  };

  const signup = (url, data) => {
    axios
      .post(url, data)
      .then((response) => {
        window.location = "/success"
      })
      .catch((err) => {
        console.error("signup POST: ERROR", err);
      });
  }

  return (
    <AuthContext.Provider value={{  login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}