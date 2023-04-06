// export const getToDo = async (text: string) => {
//   const response = await axios({
//     method: "post",
//     url: "http://localhost:5000/add",
//     data: {
//       text: text,
//     },
//   });
//   console.log(text);
//   return response;
// };

// export const addToDo = async (text: string) => {
//   const response = await axios({
//     method: "post",
//     url: "http://localhost:5000/add",
//     data: {
//       text: text,
//     },
//   });
//   console.log(text);
//   return response;
// };

// export const deleteToDo = async (_id: string) => {
//   const response = await axios({
//     method: "delete",
//     url: "http://localhost:5000/delete",
//     data: {
//       _id: _id,
//     },
//   });
//   console.log(response);
//   return response;
// };

// export const changeStatus = async (_id: string, completed: boolean) => {
//   const response = await axios({
//     method: "put",
//     url: "http://localhost:5000/completed",
//     data: {
//       firstName: "Fred",
//       lastName: "Flintstone",
//     },
//   });

//   console.log(response);
//   return response;
// };

import { ITodo } from "../types";

import axiosInstance from "./index";

//getToDos
export const getToDos = async (filter: string) => {
  const response = await axiosInstance.get<ITodo[]>("/", {});
  return response.data;
};

//addToDo
export const addToDo = async (text: string) => {
  const response = await axiosInstance.post<ITodo>("/add", { data: { text } });
  return response.data;
};

//updateToDo
export const updateToDo = async (property: ITodo) => {
  const response = await axiosInstance.patch<ITodo>(`/${property._id}`, {
    text: property.text,
    completed: property.completed,
  });
  return response;
};

//deleteToDo
export const deleteToDo = async (_id: string) => {
  const response = await axiosInstance.delete<ITodo>("/delete", {
    data: { _id },
  });
  return response;
};

//deleteAllToDo
export const deleteALlToDo = async () => {
  const response = await axiosInstance.delete<ITodo[]>("/deleteAll");
  return response.data;
};

// export const completedAllToDo = async (completedAll: boolean) => {
//   const response = await axiosInstance.patch<ITodo[]>("/completedAll", {
//     completedAll,
//   });
//   return response;
// };

export const completedAllToDo = async () => {
  const response = await axiosInstance.patch<ITodo[]>("/completedAll");
  console.log("asdadawdadwd", response.data);
  return response.data;
};
