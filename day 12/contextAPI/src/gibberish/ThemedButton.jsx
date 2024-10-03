import { useContext } from "react";
import { ThemeContext } from "./ContextProvider";

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      Toggle Theme
    </button>
  );
}
export default ThemedButton;
