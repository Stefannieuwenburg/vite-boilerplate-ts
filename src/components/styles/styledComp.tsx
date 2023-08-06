
import styled from "styled-components";



export const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  background-color:"green";
  color: whitesmoke;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 0.6s;
  &:hover {
    letter-spacing: 0.2rem;
    color: whitesmoke;
    transition: 0.6s;
  }
`;
export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButtons = styled.button`
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
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;




