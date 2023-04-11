import { ITodo } from "../store/types";

import axiosInstance from "./index";

//getToDos
export const getToDos = async (filter: string) => {
  const response = await axiosInstance.get<{ todos: ITodo[]; count: number }>(
    "/0"
  );
  return response.data;
};

//updateToDo
export const paginateToDos = async (page: number) => {
  const response = await axiosInstance.get<{ todos: ITodo[]; count: number }>(
    "/:page"
  );
  return response.data;
};

//addToDo
export const addToDo = async (text: string) => {
  const response = await axiosInstance.post<ITodo>("/", { data: { text } });
  return response.data;
};

//updateToDo
export const updateToDo = async (property: Omit<ITodo, "filter">) => {
  const response = await axiosInstance.patch<ITodo>(`/${property._id}`, {
    text: property.text,
    completed: property.completed,
  });
  return response;
};

//deleteToDo
export const deleteToDo = async (id: string) => {
  const response = await axiosInstance.delete<ITodo>("/", {
    data: { _id: id },
  });
  return response;
};

//deleteAllToDo
export const deleteALlToDo = async () => {
  const response = await axiosInstance.delete<ITodo[]>("/All");
  return response.data;
};

//completedAllToDo
export const completedAllToDo = async (completedAll: boolean) => {
  const response = await axiosInstance.patch<ITodo[]>("/completedAll", {
    completedAll,
  });
  return response.data;
};
