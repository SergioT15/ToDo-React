import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./services/TodoService";

import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  todos: todoSlice,
  [todoApi.reducerPath]: todoApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
