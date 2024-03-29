import styled from "styled-components";

type TProps = {
  isCompletedTodo: boolean;
};

export const TaskStyled = styled.div<TProps>`
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  min-height: 55px;
  background-color: rgb(47, 79, 79);
  border-radius: 10px;

  .task-text--checked {
    flex-grow: 1;
    padding: 5px 0px;

    color: ${({ isCompletedTodo }) => (isCompletedTodo ? "#eb8294" : "")};

    text-decoration: ${(props) =>
      props.isCompletedTodo ? "line-through" : "none"};
  }

  input:checked + p {
    text-decoration: line-through;
    color: rgb(235, 130, 148);
  }

  .task-input__checkbox {
    height: 20px;
    width: 20px;
  }

  .task-checkbox {
    margin-right: 8px;
  }

  .task-button__delete {
    background-color: transparent;
    height: 30px;
    width: 30px;
    margin-left: 5px;
    color: aliceblue;
    border-radius: 9px;
    padding: 0 15px;
    position: relative;
  }

  .task-input--edit {
    height: 30px;
    flex-grow: 1;
    width: 290px;
    border-radius: 10px;
    padding: 0 10px;
    border: none;
    background: #6c8c97;
  }

  .tast-img--trash {
    position: absolute;
    top: 0px;
    left: 0px;
    max-width: none;
    width: 25px;
    height: 25px;
  }
`;

