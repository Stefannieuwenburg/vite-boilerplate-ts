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
import  EventPage  from "./components/pages/EventPage";
import { FC} from "react";
import './App.css'


interface Props {
  //
}


const App:FC<Props>  = () => {
  return (
    <>
      <h3>Typscript</h3>
        <EventPage />
    </>
  );
};

export default App;

//https://www.youtube.com/watch?v=WlxcujsvcIY&list=PL5HEEqjk82MOs8N12YWrxSk3KVfJV9jIC&index=18
//time 35.25