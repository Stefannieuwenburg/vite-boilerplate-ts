//import  { useState } from 'react';
//import styled from "styled-components";


// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordInvalid, setPasswordInvalid] = useState(false);
//   const [enabled, setEnabled] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // validate password and set passwordInvalid state accordingly
//     if (password.length < 8) {
//       setPasswordInvalid(true);
//     } else {
//       setPasswordInvalid(false);
//     }
//   };

//   const usernameEntered = (e) => {
//     setUsername(e.target.value);
//     // buttonEnabled(username, password)
//   };

//   const passwordEntered = (e) => {
//     setPassword(e.target.value);
//     // buttonEnabled(username, password)
//   };

//   const buttonEnabled = (username, password) => {
//     if (username.length > 0 && password.length > 0) {
//       setEnabled(true);
//     } else {
//       enabled(false);
//     }
//   };

//   return (
//     <StyledForm onSubmit={handleSubmit}>
//       <StyledLabel>Username:</StyledLabel>
//       <StyledInput
//         type="text"
//         value={username}
//         onChange={(e) => usernameEntered(e)}
//       />
//       <StyledLabel invalid={passwordInvalid}>Password:</StyledLabel>
//       <StyledInput
//         type="password"
//         value={password}
//         onChange={(e) => passwordEntered(e)}
//       />
//       {passwordInvalid && <StyledAlert>Password is invalid.</StyledAlert>}
//       <StyledButton type="submit" disabled={!username || !password}>
//         Login
//       </StyledButton>
//     </StyledForm>
//   );
// }

// export default LoginForm;


// export const StyledForm = styled.form`
//   background-color: #f4f4f4;
//   padding: 20px;
//   border-radius: 5px;
// `;

// export const StyledLabel = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-weight: bold;
//   font-size: 0.9rem;
// `;

// export const StyledInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// export const StyledButton = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   margin-top: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:disabled {
//     opacity: 0.5;
//   }
//   &:enabled {
//     opacity: 1;
//   }

// `;

// export const StyledAlert = styled.div`
//   padding: 10px;
//   background-color: #f44336;
//   color: white;
//   margin-top: 10px;
//   border-radius: 5px;
// `;
