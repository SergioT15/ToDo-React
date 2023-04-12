import React, { useEffect, useState } from "react";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";
import { Pages } from "./components/Pages";

import { AppStyled } from "./App.styled";
import { getToDos } from "./api/todoApi";
import { useDispatch } from "react-redux";
import { setPages, setTodo } from "./store/todoSlice";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const dispatch = useDispatch();

  const currentPage = useAppSelector((state) => state.todos.currentPage)

  useEffect(() => {
    (async () => {
      try {
        const response = await getToDos(currentPage);
        dispatch(setTodo(response.todos));
        dispatch(setPages(response.count));
      } catch (err) {
        console.log(`Error! Unable to get todos! ${err}`);
      }
    })();
  }, [currentPage]);

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
