import { createContext } from "react";

const context = {
  isLoggedIng: false,
  onLogout: () => {},
};

export default createContext(context);
