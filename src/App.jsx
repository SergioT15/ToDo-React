import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Form, Title, Tasks, CountTasks, Filter } from "./components";

import styles from "./App.module.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // add new task
  const addTodo = (todoText) => {
    if (todoText.trim() !== "") {
      const newTask = {
        text: todoText,
        id: uuidv4(),
        complited: false,
      };

      setTodos([newTask, ...todos]);
    }
  };

  console.log(todos);

  return (
    <div className={styles.container}>
      <Title />
      <Form addTodo={addTodo} />
      <Tasks />
      <CountTasks />
      <Filter />
    </div>
  );
};

export { App };
