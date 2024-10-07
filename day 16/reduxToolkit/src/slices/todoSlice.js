import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    input: "",
    todos: [],
    isEdit: false,
    idToEdit: null,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    addTask: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: Date.now(),
          title: state.input,
          isComplete: false,
        },
      ];
      state.input = "";
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
  },
});

export const { setInput, addTask, deleteTask } = todoSlice.actions;
export const selectInput = (state) => {
  return state.todo.input;
};
export const selectTodos = (state) => {
  return state.todo.todos;
};
export default todoSlice.reducer;
