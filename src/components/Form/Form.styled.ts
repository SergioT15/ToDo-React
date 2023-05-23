import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-grow: 1;
  align-items: baseline;

  .form-input {
    padding: 0 15px;
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 30px;
    border-radius: 13px;
    word-break: break-all;
    background: rgba(124, 117, 117, 0.651);
    border: none;
  }

  .form-button_add {
    height: 40px;
    margin-left: 7px;
  }

  .form-renders {
    margin-left: 5px;
  }
`;
