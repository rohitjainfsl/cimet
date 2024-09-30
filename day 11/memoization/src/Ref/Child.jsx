/* eslint-disable react/display-name */
import React, { useRef } from "react";

const Child = React.forwardRef((props, ref) => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  React.useImperativeHandle(ref, () => ({
    name: {
      putFocus: () => {
        nameRef.current.focus();
      },
      getValue: () => {
        return nameRef.current.value;
      },
    },
    phone: {
      putFocus: () => {
        phoneRef.current.focus();
      },
      getValue: () => {
        return phoneRef.current.value;
      },
    },
    email: {
      putFocus: () => {
        emailRef.current.focus();
      },
      getValue: () => {
        return emailRef.current.value;
      },
    },
  }));

  return (
    <>
      <input type="text" placeholder="Enter something" ref={nameRef} />
      <input type="text" placeholder="Enter something" ref={phoneRef} />
      <input type="text" placeholder="Enter something" ref={emailRef} />
    </>
  );
});

export default Child;
