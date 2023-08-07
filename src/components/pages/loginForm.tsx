import  { useState } from 'react';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from "../styles/styledloginForm";
import {UserType} from "../types/types"
import { FC } from "react";


const LoginForm: FC = () => {
    const [username,SetUsername] = useState("");
    const [user, setUser] = useState<UserType|null>(null);
    
  // buttonEnabled(username, password)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetUsername(e.target.value);
  };
  // buttonEnabled(username, password)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            name: username,
            sessionId:Math.random(),
        });
  };

    return (
      <>
        {user?(
          (user.name ," User :  ")
        ) : (
          <StyledForm>
            <StyledLabel>Username:</StyledLabel>
            <StyledInput
              type="text"
              placeholder="username"
              onChange={handleChange}
            />
            <StyledButton onClick={handleClick}>Login</StyledButton>
          </StyledForm>
        )}
        {user?.name}
      </>
    );
};

export default LoginForm;


