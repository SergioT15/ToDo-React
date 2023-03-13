import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.conteiner}>
        <Title />
        <Form />
        <Tasks />
        <Filter />
      </div>
    </div>
  );
};

export { App };
