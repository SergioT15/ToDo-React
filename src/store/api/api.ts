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

/////////////////////////////////////////////////

import { ITodo } from "../types";

import axiosInstance from "./index";

export const getToDos = async (filter: string) => {
  const response = await axiosInstance.get<ITodo[]>("/", {});
  console.log(response.data);
  return response.data;
};

export const addToDo = async (text: string) => {
  const response = await axiosInstance.post("/add", { data: { text } });
  return response.data;
};

//updateToDo
export const updateToDo = async (_id: string, text: string) => {
  // const response = await axiosInstance.patch('/patch', { _id, text })
  const response = await axiosInstance.patch("/update", {
    data: { _id, text },
  });
  return response;
};

//deleteToDo
export const deleteToDo = async (_id: string) => {
  const response = await axiosInstance.delete("/patch", { data: { _id } });
  return response;
};

//changeStatus
export const changeStatus = async (_id: string, completed: boolean) => {
  const response = await axiosInstance.patch("/completed", {
    data: { _id, completed },
  });
  return response;
};

export const changeStatusAll = async (_id: string, completed: boolean) => {
  const response = await axiosInstance.patch("/completedAll", {
    data: { _id, completed },
  });
  return response;
};

export const filtereTodo = async (filter: string) => {
  const response = await axiosInstance.patch("/filtered", {});
  return response;
};

///////////////////////////////////////////////////////////////////////////////////
