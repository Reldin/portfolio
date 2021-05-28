import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    done: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      console.log(newTodo);
      state.todo.push({
        id: newTodo.id,
        header: newTodo.header,
        content: newTodo.content,
      });
    },
    moveToDone(state, action) {
      const todoId = action.payload;
      const todo = state.todo.find(todo => todo.id === todoId);
      state.done.push(todo);
    }
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;