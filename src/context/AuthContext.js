import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usetData, setUserData] = useState({});
  return <AuthContext.Provider>{Children}</AuthContext.Provider>;
}

export default AuthProvider;
