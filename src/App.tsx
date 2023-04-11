import React, { useEffect, useState } from "react";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";
import { Pages } from "./components/Pages";

import { AppStyled } from "./App.styled";
import { getToDos } from "./api/todoApi";
import { useDispatch } from "react-redux";
import { todoSlice } from "./store/todoSlice";

const App = () => {
  const dispatch = useDispatch();

  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  // const [currentPage, setCurrentPage] = useState(3);
  // const itemPerPage = 5;
  // const indexOfLastTask = currentPage * itemPerPage;
  // const indexOfFirstTask = indexOfLastTask - itemPerPage;
  // const currentTask = arr.slice(indexOfFirstTask, indexOfLastTask);

  // console.log("currentTask =", currentTask);

  // const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  // const pageNumbers = [];
  // const totaItems = arr.length;
  // console.log("totaItems =", totaItems);

  // for (let i = 1; i <= Math.ceil(totaItems / itemPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  // console.log("pageNumbers =", pageNumbers);

  useEffect(() => {
    (async () => {
      try {
        const response = await getToDos("All");
        dispatch(todoSlice.actions.setTodo(response.todos));
      } catch (err) {
        console.log(`Error! Unable to get todos! ${err}`);
      }
    })();
  }, []);

  return (
    <AppStyled>
      <div className="conteiner">
        <Title />
        <Form />
        <Tasks />
        <Filter />
        <Pages
        //  paginate={paginate} pageNumbers={pageNumbers}
        />
      </div>
    </AppStyled>
  );
};

export { App };
