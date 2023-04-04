import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

import { RootState } from "./store";
import { ITodo } from "./types";

export type TTodo = {
  text: string;
  _id: string;
  completed: boolean;
};

type TTodoState = {
  todos: TTodo[];
  filter?: string;
};

const initialState: TTodoState = {
  todos: [],
  filter: "All",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add new task
    addTodo: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
      // if (!action.payload.trim()) {
      //   return;
      // }
      // const newTask = {
      //   text: action.payload,
      //   _id: uuidv4(),
      //   completed: false,
      // };
      // state.todos.unshift(newTask);
    },

    // Change completed and uncompleted
    changeStatus: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload !== todo._id) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
    },

    //Delete task
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },

    // Editing on doubleClick
    editTodo: (state, action: PayloadAction<{ _id: string; text: string }>) => {
      // console.log(action.payload);
      state.todos = state.todos.map((todo) => {
        if (action.payload._id !== todo._id) {
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
    filterTodo: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const todoFiltered = createSelector(
  ({ todos }: RootState) => todos,
  (todos) => {
    // console.log(todos);
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
