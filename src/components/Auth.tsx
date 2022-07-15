import { createContext, FunctionComponent, useContext, useState } from "react";

interface AuthproviderProps {}

const authContext = createContext(null);

const Authprovider: FunctionComponent<AuthproviderProps> = (children) => {
  const [user, setUser] = useState("");

  const login = () => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  return <authContext.Provider> {children}</authContext.Provider>;
};

export default Authprovider;

export const useAuth = () => {
  return useContext(authContext);
};
