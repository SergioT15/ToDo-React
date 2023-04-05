import {
  createSlice,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";

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
    setTodo: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },

    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },

    // Editing on doubleClick
    editTodo: (state, action: PayloadAction<{ _id: string; text: string }>) => {
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      if (index === -1) {
        return state;
      }
      state.todos[index].text = action.payload.text;
    },

    //Delete task
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },

    // Change completed and uncompleted
    changeStatus: (
      state,
      action: PayloadAction<{ _id: string; completed: boolean }>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      if (index === -1) {
        return state;
      }
      state.todos[index].completed = action.payload.completed;
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
    if (todos.filter === "All") return todos.todos;

    if (todos.filter === "Active")
      return todos.todos.filter((todo) => !todo.completed);

    if (todos.filter === "Completed")
      return todos.todos.filter((todo) => todo.completed);
  }
);

export const {
  setTodo,
  changeStatus,
  deleteTodo,
  editTodo,
  changeAllStatuses,
  deleteAllCompleted,
  filterTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
