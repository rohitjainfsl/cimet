/* eslint-disable react/prop-types */
import { createContext } from "react";

export const EcomContext = createContext();

export function EcomContextProvider({ children }) {
  const contextValue = {};
  return (
    <EcomContext.Provider value={contextValue}>{children}</EcomContext.Provider>
  );
}
