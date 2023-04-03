import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

import { RootState } from "./store";

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
  changeAllStatuses,
  deleteAllCompleted,
  filterTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
