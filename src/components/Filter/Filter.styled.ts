import styled from "styled-components";

export const FilterStyled = styled.div`
  .filter {
    display: flex;
    justify-content: space-between;
  }

  .filterCounter {
    display: flex;
    align-items: center;
  }

  @media (max-width: 400px) {
    .filterCounter {
      font-size: 12px;
    }
  }
`;
