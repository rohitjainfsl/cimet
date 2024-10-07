import { useSelector } from "react-redux";
import { selectTodos } from "../slices/todoSlice";
import SingleTodo from "./SingleTodo";

function List() {
  const todos = useSelector(selectTodos);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <SingleTodo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default List;
