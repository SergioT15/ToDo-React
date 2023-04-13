import React, { useEffect } from "react";

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
  const currentPage = useAppSelector((state) => state.todos.currentPage);
  const filter = useAppSelector((state) => state.todos.filter);
  const todos = useAppSelector((state) => state.todos.todos);
  const todosLength = todos.length;

  useEffect(() => {
    (async () => {
      try {
        const response = await getToDos(currentPage, filter);
        dispatch(setTodo(response.todos));
        dispatch(setPages(response.pages));
      } catch (err) {
        console.log(`Error! Unable to get todos! ${err}`);
      }
    })();
  }, [currentPage, filter, todosLength]);

  return (
    <AppStyled>
      <div className="conteiner">
        <Title />
        <Form />
        <Tasks />
        <Pages />
        <Filter />
      </div>
    </AppStyled>
  );
};

export { App };
