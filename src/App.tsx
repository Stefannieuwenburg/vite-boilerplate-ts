import NavBar from "./componenten/navbar/NavBar";
import Theme from "./context/theme";
import "./App.css";
//import { FC } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import PostList from './components/postlist/PostList';
//import { AsyncFetch } from './components/fetchdata/AsyncFetch';
//import PostList from './components/postlist/PostList';
//import Posts from './components/fetchdata/Posts';
//import { useState} from "react";
//import Parent from "../src/components/childeren/Parent";
//import Child from "../src/components/childeren/Child";
//import Second from "../src/components/childeren/Second";
//import EventPage from "./components/pages/EventPage";
//import GlobalStyle from "./GlobalStyle";
//import LoginForm from "./components/pages/loginForm";
import { Container } from "./componenten/styles/Styled";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Theme>
        <NavBar />
        <Container>
          <h1>Hello world!</h1>
          <h2>By the power of styled-components!</h2>
        </Container>
        {children}
      </Theme>
    </>
  );
};

export default App;
