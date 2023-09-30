import { createContext, useContext, useState } from 'react';
import axios from "axios";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  const logout = () => {
    axios
      .post('/api/logout')
      .then((res) => {
        window.location = "/login"
      })
      .catch((err) => {
        console.error("logout POST: ERROR", err);
      });
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
    <AuthContext.Provider value={{ token, setToken, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}