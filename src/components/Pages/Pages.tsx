import React from "react";
import { PagesStyled } from "./Pages.styled";
import { setCurrentPage } from "../../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Pages: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const pages = useAppSelector((state) => state.todos.pages)

  const paginate = async (page: number) => {
    dispatch(setCurrentPage(page))
  }; 

  return (
    <PagesStyled>
      {pages.map((page) => (
        <button 
            onClick={() => paginate(page)} 
            key={page}>
          {page + 1}
        </button>
      ))}
    </PagesStyled>
  );
};

export { Pages };
