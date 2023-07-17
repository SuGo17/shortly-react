import { useContext } from "react";
import { LinksContext } from "../Context/LinksContext";

const useLinksContext = () => {
  const context = useContext(LinksContext);

  if (!context)
    throw new Error("useCustomContext must be used within a CustomProvider");

  return context;
};

export default useLinksContext;
