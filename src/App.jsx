import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { CountTasks } from "./components/CountTasks";
import { Filter } from "./components/Filter";

const App = () => {
  return (
    <>
      <Title />
      <Form />
      <Tasks />
      <CountTasks/>
      <Filter/>

    </>
  );
};

export { App };

