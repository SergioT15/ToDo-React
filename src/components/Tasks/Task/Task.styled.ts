import styled, { css } from "styled-components";

export const TaskStyled = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  min-height: 55px;
  background-color: rgb(47, 79, 79);
  border-radius: 10px;

  .taskP {
    flex-grow: 1;
    padding: 5px 0px;

    ${(p) =>
      p.isCompletedTodo &&
      css`
        text-decoration-line: line-through;
        color: #eb8294;
      `}/* 
    text-decoration-line: ${(p) =>
      p.isCompletedTodo ? "line-through" : "none"}; */
  }

  input:checked + p {
    text-decoration: line-through;
    color: rgb(235, 130, 148);
  }

  .taskCheckbox {
    height: 20px;
    width: 20px;
  }

  .taskCheckboxDiv {
    margin-right: 8px;
  }

  .taskDeleteButton {
    /* background: url(/assets/trash.png) 0 0 /100% auto no-repeat; */
    background-color: transparent;
    height: 30px;
    width: 30px;
    margin-left: 5px;
    color: aliceblue;
    border-radius: 9px;
    padding: 0 15px;
    position: relative;
  }

  .taskInputEdit {
    height: 30px;
    flex-grow: 1;
    width: 290px;
    border-radius: 10px;
    padding: 0 10px;
    border: none;
    background: #6c8c97;
  }

  .imgTask {
    position: absolute;
    top: 0px;
    left: 0px;
    max-width: none;
    width: 25px;
    height: 25px;
  }
`;
