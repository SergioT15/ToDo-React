import { createSlice, createSelector } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
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
      const isFalseTodo = state.todos.some((item) => !item.completed);
      state.todos = state.todos.map((todo) => {
        return { ...todo, completed: isFalseTodo };
      });
    },

    //Delete all completed tasks
    deleteAllCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },

    //Filter All Completed Active
    filterTodo: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const todoFiltered = createSelector(
  ({ todos }) => todos,
  (todos) => {
    if (todos.filter === "All") return todos.todos;

    if (todos.filter === "Active")
      return todos.todos.filter((todo) => !todo.completed);

    if (todos.filter === "Completed")
      return todos.todos.filter((todo) => todo.completed);
  }
);

export const {
  addTodo,
  changeStatus,
  deleteTodo,
  editTodo,
  changeAllStatuses,
  deleteAllCompleted,
  filterTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
