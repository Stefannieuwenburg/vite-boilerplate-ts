
import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #a7a4a4;
  padding: 20px;
  border-radius: 5px;
  color: #000000;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  color: #000000;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #969292;
  border-radius: 5px;
  color: #000000;
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: #c21313;
  margin-top: 10px;
  border-radius: 5px;
`;
