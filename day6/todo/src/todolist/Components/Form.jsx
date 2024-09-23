/* eslint-disable react/prop-types */
import {  useState } from "react";

const Form = ({setTodoArr}) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), task: input, completed: false };

    setTodoArr((prev) => [...prev, newTask]);
    setInput("");
};

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
            autoFocus
        />
        <button type="submit"
        >Add</button>
      </form>
    </>
  );
};

export default Form;
