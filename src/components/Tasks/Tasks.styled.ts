import styled from "styled-components";

export const TasksStyled = styled.div`
  color: cadetblue;
  word-break: break-all;
  margin-bottom: 10px;

  .tasks-enter-active {
    animation: fade-in 500ms forwards;
  }

  .tasks-exit-active {
    animation: fade-out 500ms forwards;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(150px);
    }
  }
`;
