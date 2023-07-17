import { createContext, useState } from "react";

export const LinksContext = createContext();

const LinksContextProvider = ({ children }) => {
  let [allLinks, setAllLinks] = useState([]);
  return (
    <LinksContext.Provider value={{ allLinks, setAllLinks }}>
      {children}
    </LinksContext.Provider>
  );
};

export default LinksContextProvider;
