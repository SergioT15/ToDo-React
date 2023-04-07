import styled, { css } from "styled-components";

type TIsPressed = {
  isPressedTodo : boolean;
};

export const FilterButtonStyled = styled.div<TIsPressed>`
  .filter-button--green {
    ${(button) =>
      button.isPressedTodo &&
      css`
        background: rgb(47, 79, 79);
        color: aliceblue;
      `}
  }
`;
