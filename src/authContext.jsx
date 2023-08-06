import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const authenticate = (username) => {
    const generatedToken = Math.random().toString(36).substring(7);
    setToken(generatedToken);
    setUser(username);
  };


  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
