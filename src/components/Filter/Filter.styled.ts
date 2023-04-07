import styled from "styled-components";

export const FilterStyled = styled.div`
  .filter-container {
    display: flex;
    justify-content: space-between;
  }

  .filter-button {
    display: flex;
    align-items: center;
  }

  @media (max-width: 400px) {
    .filter-button {
      font-size: 12px;
    }
  }
`;
