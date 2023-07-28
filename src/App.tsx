
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import PostList from './components/postlist/PostList';
//import MyFetch from './components/AsyncData/asyncFetch'
//import PostList from './components/postlist/PostList';
import Posts from './components/fetchdata/Posts';
import { useState} from "react";
import './App.css'



const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            <div>
               <Posts />
            </div>
        </>
    );
};

export default App