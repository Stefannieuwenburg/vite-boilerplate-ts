

import { PostProps } from "../types/types";

const PostCard = (post:PostProps ) => {
    return (
        <div className="Card" key={post.id}>
            <h2>{"your id is :" + post.userId}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;

// const usePosts = posts.map(
//     (post: { id: number; userId: number; title: string; body: string }) => {
//         return (
//             <div key={post.id}>
//                 <h2>{post.userId}</h2>
//                 <h2>{post.title}</h2>
//                 <p>{post.body}</p>
//             </div>
//         );
//     }
// );