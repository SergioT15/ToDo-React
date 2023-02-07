import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Form, Title, Tasks, Filter } from "./components";

import styles from "./App.module.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTodo = (todoText) => {
    if (todoText.trim() !== "") {
      const newTask = {
        text: todoText,
        id: uuidv4(),
        completed: false,
      };

      setTodos([newTask, ...todos]);
    }
  };

  console.log(todos);

  // Change completed and uncompleted
  const changeStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //Delete task
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //Change all statuses completed and incomplete
  const changeAllStatuses = () => {
    const updatedTodos = todos.map((todo) => {
      if (todos) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //Delete all completed tasks
  const deleteAllCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.completed !== true);

    setTodos(updatedTodos);
  };

  return (
    <div className={styles.container}>
      <Title />
      <Form addTodo={addTodo} />
      <Tasks
        todos={todos}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
      />
      <Filter
        todos={todos}
        changeAllStatuses={changeAllStatuses}
        deleteAllCompleted={deleteAllCompleted}
      />
    </div>
  );
};

export { App };
