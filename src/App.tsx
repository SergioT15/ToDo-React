import React from "react";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";

// import styles from "./App.module.css";
import { AppStyled } from "./App.styled";

const App = () => {
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
