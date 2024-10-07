function SingleTodo({ id, title, isComplete }) {
  return (
    <>
      <li>
        <span>{title}</span>
        <br />
        <span>{isComplete ? "yes" : "Nope"}</span>
      </li>
    </>
  );
}

export default SingleTodo;
