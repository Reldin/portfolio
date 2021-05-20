import React from "react";

const Context = React.createContext({
  navLink1: "Home",
  navLink2: "About"
});

export const ContextProvider = (props) => {
  return (
    <Context.Provider
      value={{
        navLink1: "Home",
        navLink2: "About",
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
