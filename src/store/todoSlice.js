import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isCompletedAll: true,
    filter: "All",
  },
  reducers: {
    // Add new task
    addTodo: (state, action) => {
      if (!action.payload.trim()) {
        return;
      }
      const newTask = {
        text: action.payload,
        id: uuidv4(),
        completed: false,
      };
      state.todos.unshift(newTask);
    },

    // Change completed and uncompleted
    changeStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload !== todo.id) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
    },

    //Delete task
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // Editing on doubleClick
    editTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) => {
        if (action.payload.id !== todo.id) {
          return todo;
        }
        return { ...todo, text: action.payload.text };
      });
    },

    //Change all statuses completed and incomplete
    changeAllStatuses: (state) => {
      const isFalsyTodo = state.todos.some((item) => !item.completed);
      state.todos = state.todos.map((todo) => {
        return { ...todo, completed: isFalsyTodo };
      });
    },

    //Delete all completed tasks
    deleteAllCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const {
  addTodo,
  changeStatus,
  deleteTodo,
  editTodo,
  changeAllStatuses,
  deleteAllCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
