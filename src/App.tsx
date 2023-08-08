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
import { StyledWrapper } from "./components/styles/styles.comp";
//import GlobalStyle from "./GlobalStyle";
import LoginForm from "./components/pages/loginForm";
import NavBar from "../src/components/navbar/NavBar";
import { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <NavBar />
      <StyledWrapper>
        <LoginForm />
      </StyledWrapper>
    </>
  );
};

export default App;

//https://www.youtube.com/watch?v=WlxcujsvcIY&list=PL5HEEqjk82MOs8N12YWrxSk3KVfJV9jIC&index=18
//time 43.43
