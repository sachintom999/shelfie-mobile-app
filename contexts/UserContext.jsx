// user context
import React, { createContext, useState } from "react";
export const UserContext = createContext();
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.getSession("");
      setUser(response);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function logout(email, password) {}

  return (
    <UserContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
