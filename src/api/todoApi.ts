import { ITodo } from "../store/types";

import axiosInstance from "./index";

interface IInfo {
  count_active_todos: number;
  pages: number[];
}

//getToDos
export const getToDos = async (currentPage: number, currentFilter: string) => {
  const response = await axiosInstance.get<{
    todos: ITodo[];
    info: IInfo;
  }>(`/todo/${currentPage}/${currentFilter}`);
  return response.data;
};

//addToDo
export const addToDo = async (text: string) => {
  const response = await axiosInstance.post<ITodo>("/todo", { text });
  return response.data;
};

export interface IOneTodo {
  id: number;
  text: string;
  completed: boolean;
}

export const updateToDo = async (property: Omit<ITodo, "filter">) => {
  const response = await axiosInstance.patch<{
    count_active_todos: number;
    new_todo: IOneTodo;
  }>(`/todo/${property.id}`, {
    text: property.text,
    completed: property.completed,
  });
  return response.data;
};

//deleteToDo
export const deleteToDo = async (id: number) => {
  const response = await axiosInstance.delete<ITodo>(`/todo/${id}`);
  return response;
};

//deleteAllToDo
export const deleteALlToDo = async () => {
  const response = await axiosInstance.delete<ITodo[]>("/All");
  return response.data;
};

//completedAllToDo
export const completedAllToDo = async (completedAll: boolean) => {
  const response = await axiosInstance.patch<ITodo[]>(
    `/completedAll/${completedAll}`
  );
  return response.data;
};
