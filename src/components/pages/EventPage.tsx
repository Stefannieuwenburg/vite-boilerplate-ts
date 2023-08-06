import { FC } from "react";
import { styled } from "styled-components";

//import "./App.css";

interface Props {
  //
}

const EventPage: FC<Props> = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked Search");
  };
  return (
    <>
      <form>
        <StyledInput type="text" placeholder="Search for anything" />
        <StyledButton onClick={handleClick}>Search</StyledButton>

        <div className="Post">
          <h1>Lorem ipsum dolar sit amet consectetur adipisicing elit</h1>
          <p>
            Lorem is slechts een proeftekst uit het drukkerij- en zetterijwezen.
            Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de
            16e eeuw, toen een onbekende drukker een zethaak met letters nam en
            ze door elkaar husselde om een font-catalogus te maken. Het heeft
            niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd,
            overgenomen in elektronische letterzetting. Het is in de jaren '60
            populair geworden met de introductie van Letraset vellen met Lorem
            Ipsum passages en meer recentelijk door desktop publishing software
            zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
          </p>
          <StyledButton>Delete</StyledButton>
          <div className="post">
            <h1>Lorem ipson dolar sit amet consectetur adipisicing elit</h1>
            <p>
              niet alleen vijf eeuwen overleefd maar is ook, vrijwel
              onveranderd, overgenomen in elektronische letterzetting. Het is in
              de jaren '60 populair geworden met de introductie van Letraset
              vellen met Lorem Ipsum passages en meer recentelijk door desktop
              publishing software zoals Aldus PageMaker die versies van Lorem
              Ipsum bevatten.
            </p>
            <StyledButton>Delete</StyledButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default EventPage;


//styled-components
export const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  background-color: green;
  color: whitesmoke;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 0.6s;
  &:hover {
    letter-spacing: 0.2rem;
    color: white;
    transition: 0.6s;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

