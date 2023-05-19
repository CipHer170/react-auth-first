import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  <AuthContext.Provider>{Children}</AuthContext.Provider>;
}

export default AuthProvider;
