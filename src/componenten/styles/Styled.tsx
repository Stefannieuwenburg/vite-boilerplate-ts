import styled from "styled-components";

export const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

export const AppContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  margin: 10px 10px;
`;
export const Grid = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const Image = styled.img`
  background-image: url(https://picsum.photos/1280?image=849);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const BoxContainer = styled.div`
  width: 500px;
  padding: 50px;
  color: yellow;
  background: blue;
`;
export const StyleContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 20vh;
  color: white;
  background-color: #141414;
`;
export const FooterMain = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
  flex-direction: row;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  position: relative;
  bottom: 0;
  width: 100%;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #cccccc;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  color: white;
  margin: 1.2rem;
  padding: 1.2rem;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  color: white;
  margin: 1.2rem;
  padding: 1.2rem;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2.1rem;
  letter-spacing: 2px;
  padding: 0.3rem;
`;

export const ParagraphStyled = styled.p`
  font-size: 1.2rem;
  margin: 1.2rem;
  color: var(--Grey);
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Grey);
`;

export const Button = styled.button`
  padding: 10px 30px;
  background-color: var(--White);
  color: var(--Grey);
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 20px;
  transition: 0.6s;
  &:hover {
    background-color: var(--Orange);
    transition: 0.6s;
  }
`;
export const ButtonStyled = styled.button`
  border-radius: 20px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  transition: 0.6s;
  background-color: blue;
  &:hover {
    background-color: var(--Orange);
    transition: 0.6s;
  }
`;
export const GreenButton = styled.button`
  border-radius: 20px;
  width: 200px;
  height: 50px;
  background-color: Green;
  cursor: pointer;
  transition: 0.6s;
  &:hover {
    background-color: var(--Orange);
    transition: 0.6s;
  }
`;
export const ButtonProps = styled.button`
  border-radius: 20px;
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.6s;
  &:hover {
    background-color: var(--Orange);
    transition: 0.6s;
  }
`;
export const StyledContainer = styled.section`
  background-color: #6f00ff;
  font-family: "Roboto", sans-serif;
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  color: whitesmoke;
  font-size: 0.9rem;
`;

export const StyledWrapper = styled.section`
  background-color: #ffa60088;
  font-family: "Roboto", sans-serif;
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  color: whitesmoke;
  font-size: 0.9rem;
  border-radius: 10px;
`;

export const StyledHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  color: whitesmoke;
`;

export const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  background-color: #ffa60088;
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
  text-align: center;
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
  border: 2px solid #ccc;
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
export const Container = styled.div`
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${(props) => props.theme.colors.lightBlue};
  font-family: ${(props) => props.theme.fonts[0]};
`;

export const Heading = styled.h1`
  font-size: ${({ theme: { fontSizes } }) =>
    fontSizes ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;




