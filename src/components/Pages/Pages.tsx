import React from "react";
import { PagesStyled } from "./Pages.styled";
import { setCurrentPage } from "../../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Pages: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.todos.currentPage);
  const pages = useAppSelector((state) => state.todos.pages);

  const paginate = async (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <PagesStyled>
      {pages.length > 1 && (
        <button
          className="page-button"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage <= 0}
        >
          {"<"}
        </button>
      )}

      {pages.map((page) => (
        <button
          className="page-button"
          style={{
            color: currentPage === page ? "white" : "",
            backgroundColor: currentPage === page ? "rgb(47, 79, 79)" : "",
          }}
          onClick={() => paginate(page)}
          key={page}
        >
          {page + 1}
        </button>
      ))}

      {pages.length > 1 && (
        <button
          className="page-button"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage + 1 >= pages.length}
        >
          {">"}
        </button>
      )}
    </PagesStyled>
  );
};

export { Pages };
