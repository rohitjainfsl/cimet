import { useDispatch, useSelector } from "react-redux";
import { addTask, selectInput, setInput } from "../slices/todoSlice";

function Form() {
  const input = useSelector(selectInput);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask());
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        value={input}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Form;
