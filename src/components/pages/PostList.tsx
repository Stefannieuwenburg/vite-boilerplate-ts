// mogelijke oplossing React useEffect Hooks
//https://plainenglish.io/blog/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081
//25:25 https://www.youtube.com/watch?v=WlxcujsvcIY&list=PL5HEEqjk82MOs8N12YWrxSk3KVfJV9jIC&index=18
// import "./App.css";
//import PostCard from "../postcard/PostCard";
//import { PostProps} from "../types/types";
//import { useEffect } from "react";
import { useState, useEffect} from "react";

 
// het werkt maar geen uitkomst op het scherm
function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async ():Promise<any> => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const postData = await res.json();
            console.log(postData);
            setPosts(posts);
        };
        fetchPosts();
    }, []);
    const PostCard = posts.map(
        (post: { id: number; title: string; body: string; userId: number[]}) => {
            return (
                <div className="postCard" key={post.id}>
                    <h2>{"your id is :" + post.userId}</h2>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            );
        }
    );
    return (
        <div>
            <h2>Fetch API With UseState and UseEffect</h2>
            <>
                {PostCard}
               
            </>
        </div>
    );
}

export default PostList;
