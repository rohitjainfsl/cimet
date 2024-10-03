import { createContext, useState } from "react";

export const ThemeContext = createContext();

// Create a Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
