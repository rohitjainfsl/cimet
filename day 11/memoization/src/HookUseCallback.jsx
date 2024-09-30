/* eslint-disable no-undef */
import React, { useCallback, useState } from "react";

// This could be a separate file in a real application
// eslint-disable-next-line react/display-name
const ExpensiveButton = React.memo(({ onClick, children }) => {
  console.log("ExpensiveButton rendered");
  return <button onClick={onClick}>{children}</button>;
});
function UseCallback() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const incrementCount = useCallback(() => setCount((prevCount) => prevCount + 1)
  ,[count])

  const style = {
    backgroundColor: darkTheme ? "#000" : "#fff",
    color: darkTheme ? "#fff" : "#000",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h2>Count: {count}</h2>

      <ExpensiveButton onClick={incrementCount}>
        Increment Count
      </ExpensiveButton>

      <button onClick={() => setDarkTheme((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default UseCallback;
