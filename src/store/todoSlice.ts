import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "./types";

export type TTodo = {
  text: string;
  _id: string;
  completed: boolean;
};

type TTodoState = {
  todos: TTodo[];
  filter: string;
  pages: number[];
  currentPage: number;
};

const initialState: TTodoState = {
  todos: [],
  filter: "All",
  pages: [],
  currentPage: 0,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //AllTodos changeAllCompleted, deleteAllCompleted
    setTodo: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },

    setPages: (state, action: PayloadAction<number[]>) => {
      state.pages = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    // Add new task
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },

    //Delete task
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },

    // Editing on doubleClick
    udateTodo: (
      state,
      action: PayloadAction<{ _id: string; text: string; completed: boolean }>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      if (index === -1) {
        return state;
      }
      state.todos[index].text = action.payload.text;
      state.todos[index].completed = action.payload.completed;
    },

    changeAllStatuses: (state) => {
      const isFalseTodo = state.todos.some((item) => !item.completed);
      state.todos = state.todos.map((todo) => {
        return { ...todo, completed: isFalseTodo };
      });
    },

    filterTodo: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setTodo,
  setPages,
  setCurrentPage,
  deleteTodo,
  udateTodo,
  changeAllStatuses,
  filterTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
