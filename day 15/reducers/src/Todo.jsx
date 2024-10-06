import { useReducer } from "react";
import { nanoid } from "nanoid";
import { MdDelete, MdEdit } from "react-icons/md";
//=> "V1StGXR8_Z5jdHi6B-myT"

const init = {
  todos: [],
  input: "",
  isEditable:false,
  idToEdit:null
};

function reducer(state, action) {
  switch (action.type) {
    case "inputValue":
      return { ...state, input: action.payload };

    case "add":
      // eslint-disable-next-line no-case-declarations
      const todo = { id: nanoid(), task: state.input, isComplete:false };
      return { ...state, todos: [...state.todos, todo], input: "" };
    case "delete":
      // eslint-disable-next-line no-case-declarations
      const updatedTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      //   console.log(updatedTodo);
      return { ...state, todos: updatedTodo };
      case 'edit':
        let sellected=state.todos.find((el)=>el.id==action.payload)
        return {...state,input:sellected.task,isEditable:true,idToEdit:action.payload}
      case "update":return {
        ...state,
        todos:state.todos.map((el)=>el.id===state.idToEdit?{...el,task:state.input}:el),
        isEditable:false,
        idToEdit:null,
        input:""
      }

      case 'toggle':
        return {...state, todos:state.todos.map(todo=>todo.id === action.payload?{...todo, isComplete:!todo.isComplete}:todo)}
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, init);

  function handleSubmit(e) {
    e.preventDefault();
    if (state.input === "") return;
    if(state.isEditable){
        dispatch({type:"update"})
    }else{
        dispatch({ type: "add" });
    }
  }

  function handleDelete(id) {
    console.log(id);
    dispatch({ type: "delete", payload: id });
  }
  function handleEdit(id){
           
    dispatch({type:'edit', payload:id})
  }


  function handleStatus (id) { 
    dispatch({type:'toggle', payload:id});
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "inputValue", payload: e.target.value })
          }
        />
        
        <button type="submit">{state.isEditable?"edit task":"Add Task"}</button>
      </form>

      <ul>
        {state.todos?.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.isComplete} onChange={()=>{
                handleStatus(task.id);           
            }}/>
            <span style={{textDecoration:task.isComplete ? 'line-through':'none'}}> {task.task}</span>
            <MdDelete onClick={() => handleDelete(task.id)} />
            {!task.isComplete && <MdEdit  onClick={()=>handleEdit(task.id)}/> }
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
