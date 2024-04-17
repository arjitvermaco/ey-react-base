import { createSlice } from "@reduxjs/toolkit";

const initialState = [];




const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo(state, data) {
      // state.push(data.payload)
      let newTodos = [...state, data.payload];
      state = newTodos;
    },
    removeTodo(state, data) {

    },
    editTodo(state, data) {
      const newTodos = state.map((item) => {
        if (data.todoItem === item.todoItem) {
          return { ...item, status: !item.status };
        }
        return item;
      });

      state = newTodos
    },
  },
});
