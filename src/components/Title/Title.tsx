// import styles from "./Title.module.css";
import React from "react";
import { TitleStyled } from "./Title.styled";

const Title: React.FC = () => {
  return (
    <TitleStyled>
      <div>To Do List</div>
    </TitleStyled>
  );
};

export { Title };
