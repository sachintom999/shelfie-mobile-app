// user context
import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function register(email, password) {}
  async function login(email, password) {}
  async function logout(email, password) {}

  return (
    <UserContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
