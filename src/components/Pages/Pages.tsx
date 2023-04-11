import React, { useEffect } from "react";
import { PagesStyled } from "./Pages.styled";
import { todoSlice } from "../../store/todoSlice";
import { paginateToDos } from "../../api/todoApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Pages: React.FC = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = React.useState<number[]>([0]);
  // const pageNumbers = useAppSelector((state) => state.todos.page);

  const paginate = async (number: number) => {
    const response = await paginateToDos(number);

    
    setState([response.count]);


    // const todos = await dispatch(pageNumbersTodo(number));
    dispatch(todoSlice.actions.setTodo(response.todos));
  };


  // useEffect(() => {

  //   () => paginate()
  // }, []);




  // const paginate = async (number: number) => {
  //   const response = await paginateToDos(number);
  //   setState([response.count, 2333]);
  //   // const todos = await dispatch(pageNumbersTodo(number));
  //   dispatch(todoSlice.actions.setTodo(response.todos));
  // };





  // const completeAllComple = async () => {
  //   try {
  //     const todos = await completedAllToDo(isFalseTodo);
  //     dispatch(setTodo(todos));
  //   } catch (err) {
  //     console.log(`Error! Unable to completed all todo! ${err}`);
  //   }
  // };
 
//   const arr= []



// for (let i = 1; i < 45 ; i++) {
//   setState([i]);
//   }


const N = 16;
const arr = Array.from({length: N}, (_, index) => index);
console.log(arr);
 
console.log(state);

  return (
    <PagesStyled>
      {state.map((number) => (
        <button onClick={() => paginate(number)} key={number}>
          {number}
        </button>
        // <button onClick={() => paginate(number)} key={number}>
        //   {number}
        // </button>
      ))}
    </PagesStyled>
  );
};

export { Pages };
