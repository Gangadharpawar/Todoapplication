import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";

export function AuthoProvider({ children }) {
  const [isLoggedIn, SetIsLoggedIn] = useState(null);
  const Logout = () => {
    sessionStorage.removeItem("token");
    SetIsLoggedIn(false);
  };
  const LogIn = (token) => {
    sessionStorage.setItem("token", token);
    SetIsLoggedIn(true);
  };
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    !token ? SetIsLoggedIn(false) : SetIsLoggedIn(true);
  }, []);

  // const logouttoken = sessionStorage.removeItem("token");
  // !logouttoken ? setIsloggedOut(false) : setIsloggedOut(true);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        LogIn,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
