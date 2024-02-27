import React, { useState, useContext, createContext } from "react";

const ShowContext = createContext();
export const ShowProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [checked, setChecked] = useState(false);
  return (
    <ShowContext.Provider
      value={{ showData, setShowData, checked, setChecked }}
    >
      {children}
    </ShowContext.Provider>
  );
};
export const useShow = () => useContext(ShowContext);

//wrap parent in the <provider>
//Show data being used in SearchWidget
