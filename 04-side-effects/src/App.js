import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // We use "useEffect" to execute actions that does not depends on render o re-reder, and we do not want to
  // re-execute after componente reevaluation
  useEffect(() => {
    // If we do not set dependencies, useEfect is just goint to execute once ad the beginning ⚠️
    setIsLoggedIn(localStorage.getItem("loggedIn") === 1);
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("loggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("loggedIn", 0);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
