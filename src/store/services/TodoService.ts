import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    getAllTodos: build.query<ITodo[], void>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["Todo"],
    }),
    addTodo: build.mutation<ITodo, { text: string }>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),

    deleteTodo: build.mutation<string, { _id: string }>({
      query: (body) => ({
        url: "/delete",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),

    updateTodo: build.mutation<string, { _id: string; text: string }>({
      query: (body) => ({
        url: "/update",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),

    changeStatus: build.mutation<string, { _id: string; completed: boolean }>({
      query: (body) => ({
        url: "/completed",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),

    filtereTodo: build.mutation<string, { filter: string }>({
      query: (params) => ({
        url: "/",
        method: "GET",
        params,
      }),
      // invalidatesTags: ["Todo"],
    }),

    // ActiveTodo: build.query<ITodo[], void>({
    //   query: () => ({
    //     url: "/Active",
    //   }),
    //   providesTags: ["Todo"],
    // }),

    // CompletedTodo: build.query<ITodo[], void>({
    //   query: () => ({
    //     url: "/Completed",
    //   }),
    //   providesTags: ["Todo"],
    // }),
  }),
});

export const {
  useGetAllTodosQuery,
  useDeleteTodoMutation,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useChangeStatusMutation,
  // useActiveTodoQuery,
  // useCompletedTodoQuery,
  useFiltereTodoMutation,
} = todoApi;
