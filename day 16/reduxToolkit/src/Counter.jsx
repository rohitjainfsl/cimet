import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./slices/slice";

function Counter() {
  const dispatch = useDispatch();
  //   const init = useSelector((state) => state.counter);
  const count = useSelector(selectCount);
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default Counter;
