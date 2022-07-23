import React, { createContext, useState } from "react";

const AppRootContext = createContext();

const AppRootContextProvider = ({ children }) => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  return <AppRootContext.Provider value={{ navIsVisible, setNavIsVisible }}>{children}</AppRootContext.Provider>;
};

export { AppRootContext, AppRootContextProvider };
