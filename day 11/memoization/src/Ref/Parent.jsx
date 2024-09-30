import React, { useRef } from "react";
import Child from "./Child";

function Parent() {
  const inputRef = useRef();
  console.log(inputRef)
  function handleClick() {
    inputRef.current.putFocus()
    console.log(inputRef.current.getValue())
  }

  return (
    <>
      <Child ref={inputRef} />
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default Parent;
