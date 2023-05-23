import styled from "styled-components";

export const AppStyled = styled.div`
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: aliceblue;
  align-items: stretch;
  text-align: center;
  border: none;

  .conteiner {
    margin: 0px 10px;
  }

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px dashed green;
  }

  .circle.entering {
    animation: show-loader 0.5s forwards;
  }

  .circle.entered {
    animation: rotate-loader 0.5s infinite;
  }

  .circle.exiting {
    animation: show-loader 0.5s reverse;
  }

  .circle.exited {
  }

  @keyframes show-loader {
    0% {
      opacity: 0;
      transform: translateY(-200px);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes rotate-loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .task-not-found {
    color: cadetblue;
    word-break: break-all;
    margin-bottom: 10px;
  }

  /* .fade-enter-active {
    animation: fade-in 500ms forwards;
  }

  .fade-exit-active {
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
  } */

  button {
    border-radius: 13px;
    background: rgba(124, 117, 117, 0.651);
    height: 40px;
    border: none;
  }

  input::-webkit-slider-runnable-track {
    background: green;
  }
`;
