
//Online Voorbeeld 
import { useEffect, useState } from "react";
import styled from "styled-components";

const PostListApi = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Paragraph>{advice}</Paragraph>
        </Wrapper>
    );
};

export default PostListApi;

export const Wrapper = styled.div`
    padding-top: 150px;
    margin: 0 auto;
`;

export const Paragraph = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
`;
export const BackgroundImg = styled.img`
    position: absolute;
    width: 100%;
    top: 0px;
    z-index: -1;
`;