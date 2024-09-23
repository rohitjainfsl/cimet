/* eslint-disable react/prop-types */

const List = ({ todoArr, handleChange, handleDelete }) => {
  console.log(todoArr);
  return (
    <ul>
      {todoArr.map((val) => {
        return (
          <li key={val.id}>
            <p>{val.task}</p>
            <input
              type="checkbox"
              checked={val.completed}
              onChange={() => handleChange(val.id)}
              id=""
            />
            <button onClick={() => handleDelete(val.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
