import { createContext, useState } from "react";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
    
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
