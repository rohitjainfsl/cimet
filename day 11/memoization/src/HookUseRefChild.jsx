import React, { useEffect, useImperativeHandle, useRef } from "react";

// eslint-disable-next-line react/display-name
const Child = React.forwardRef((props, ref) => {
  const nameRefChild = useRef("");
  const nameRefChild2 = useRef("");

  useImperativeHandle(ref, () => {
    return {
      putFocus() {
        nameRefChild.current.focus();
      },
      getValue() {
        return nameRefChild.current.value;
      },
      emptyInput() {
        nameRefChild.current.value = "";
      },
    };
  });

  //   function putFocus1() {
  //     // nameRefChild.current.focus();
  //     nameRefChild.current.value = "";
  //   }

  //   useEffect(() => {
  //     props.fetchFunctions(putFocus1);
  //   }, []);

  return (
    <>
      <input
        ref={nameRefChild}
        type="text"
        placeholder="Enter your name"
        value={props.initialName}
      />

      <input
        ref={nameRefChild2}
        type="text"
        placeholder="Enter your phone number"
      />
    </>
  );
});

export default Child;
