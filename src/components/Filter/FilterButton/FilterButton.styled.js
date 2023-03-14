import styled, { css } from "styled-components";

export const FilterButtonStyled = styled.div`
  .filterButtonGreen {
    ${(button) =>
      button.isPressedTodo &&
      css`
        background: rgb(47, 79, 79);
        color: aliceblue;
      `}
  }
`;
