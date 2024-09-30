import { useMemo, useState } from "react";

function UseMemo() {
  const [num, setNum] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  function Square() {
    return calculateSquare;
  }

  const style = {
    backgroundColor: darkTheme ? "#000" : "#fff",
    color: darkTheme ? "#fff" : "#000",
    height: "100vh",
  };
  function calculate(num) {
    for (let i = 0; i <= 2000000000; i++) {}
    return num * num;
  }

  const calculateSquare = useMemo(() => calculate(num), [num]);

  return (
    <div style={style}>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
      />

      <button onClick={() => setDarkTheme((previousTheme) => !previousTheme)}>
        Change Theme
      </button>

      <p>{<Square />}</p>
    </div>
  );
}

export default UseMemo;
