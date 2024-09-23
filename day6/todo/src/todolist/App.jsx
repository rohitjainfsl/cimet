import { useState, useEffect } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

const App = () => {
  const [todoArr, setTodoArr] = useState(
    localStorage.getItem("todoArr")
      ? JSON.parse(localStorage.getItem("todoArr"))
      : []
  );
  function handleChange(individualTaskId) {
    const updatedTodoArr = todoArr.map((eachTask) => {
      return eachTask.id === individualTaskId
        ? { ...eachTask, completed: !eachTask.completed }
        : eachTask;
    });
    setTodoArr(updatedTodoArr);
  }

  function handleDelete(id) {
    const updatedTodoArr = todoArr.filter((prev) => prev.id !== id);

    setTodoArr(updatedTodoArr);
  }
  useEffect(() => {
    if (todoArr.length > 0)
      localStorage.setItem("todoArr", JSON.stringify(todoArr));
  }, [todoArr]);

  return (
    <div>
      <Form setTodoArr={setTodoArr} />
      <List
        todoArr={todoArr}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
