import { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count < 10 ? state.count + 1 : state.count,
    };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  } else {
    return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </>
  );
}

export default Counter;
