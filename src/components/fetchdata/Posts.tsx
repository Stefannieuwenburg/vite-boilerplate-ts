import  { useState, useEffect } from "react";
import { PostProps } from "../types/types";
//import {PostCard }from "../postcard/PostCard"

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const postsData = await response.json();
            console.log(postsData);
            setPosts(postsData);
        };
        fetchPosts();
    }, []);

    const usePosts = posts.map((post: PostProps) => {
        return (
            <div className="card" key={post.id}>
                <h2>{post.title}</h2>
                <br></br>
                <h2>{"##your id is : " + post.userId}</h2>
                <br></br>
                <p>{post.body}</p>
            </div>
        );
    });

    return (
        <div>
            <h1>Fetch API With UseState and UseEffect</h1>
            <div >{usePosts}</div>
        </div>
    );
}

export default Posts;
