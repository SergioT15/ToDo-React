import React, { useEffect } from "react";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";

import { AppStyled } from "./App.styled";
import { getToDos } from "./api/todoApi";
import { useDispatch } from "react-redux";
import { todoSlice } from "./store/todoSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const todos = await getToDos("All");
        dispatch(todoSlice.actions.setTodo(todos));
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
      </div>
    </AppStyled>
  );
};

export { App };
