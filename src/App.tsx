import React, { useEffect } from "react";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";

// import styles from "./App.module.css";
import { AppStyled } from "./App.styled";
import { getToDos } from "./store/api/api";
import { useDispatch } from "react-redux";
import { todoSlice } from "./store/todoSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const todos = await getToDos("All")
            
      dispatch(todoSlice.actions.setTodo(todos))
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
