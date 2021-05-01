import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isLoggedIng: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginHandler = (email, password) => {

    localStorage.setItem("loggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("loggedIn", 0);
    setIsLoggedIn(false);
  };
  // We use "useEffect" to execute actions that does not depends on render o re-reder, and we do not want to
  // re-execute after componente reevaluation
  useEffect(() => {
    // If we do not set dependencies, useEfect is just goint to execute once ad the beginning ⚠️
    setIsLoggedIn(localStorage.getItem("loggedIn") === 1);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
