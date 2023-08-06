
//Online Voorbeeld mis nog the key voorbeeld
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PostProps } from "../types/types";


export const AsyncFetch: React.FC<PostProps> = () => {
    const [Posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const fetchData = async (): Promise<void> => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setPosts(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
            <Wrapper>
                {Posts.map((post: PostProps) => (
                    <Paragraph key={post.id}>
                        {post.title}{post.body}{post.userId}
                    </Paragraph>
                   
                ))}
            </Wrapper>
            );
};
   const Wrapper = styled.div`
       padding-top: 150px;
       margin: 0 auto;
   `;

   const Paragraph = styled.h2`
       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
           Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
       font-style: normal;
       font-weight: bold;
       font-size: 20px;
       line-height: 30px;
       text-align: center;
   `;

   //<AsyncFetch userId={1} title="test" body="test" id={1} />;