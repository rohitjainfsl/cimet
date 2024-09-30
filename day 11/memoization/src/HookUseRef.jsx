import { useRef } from "react";
import Child from "./HookUseRefChild";

function HookUseRef() {
  const nameRef = useRef("");
  const nameRef2 = useRef("");

  function handleClick() {
    console.log(nameRef.current.getValue());
    nameRef.current.emptyInput();
    nameRef.current.putFocus();
    // console.log(nameRef.current.value);
    // nameRef.current.value = "";
    // nameRef.current.focus();
  }
  const fetchFunctions = (func1) => {
    func1();
  };

  return (
    <>
      <Child
        fetchFunctions={fetchFunctions}
        initialName={"Shivam"}
        ref={nameRef}
      />
      <Child2 ref={nameRef2} />
      <button onClick={handleClick}>Print in Console</button>
    </>
  );
}

export default HookUseRef;

// forwardRef
// useImperativeHandle
