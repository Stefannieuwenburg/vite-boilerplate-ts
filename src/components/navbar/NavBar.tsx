import React from "react";
import styled from "styled-components";



const Container = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: space-between;
    align-items: center;
    background-color: grey;
    color: white;
    margin: 1.2rem;
    padding: 1.2rem;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 1.5rem;
    img {
        width: 10%;
        height: auto;
        object-fit: cover;
    }
    a{
        color:green;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    margin-right: 30px;
    font-size:1.0rem;
    a{
        color:green;
    } 

`;

const NavBar: React.FC = () => {
    return (
        <>
            <Container>
                <Logo>
                    <a href="/#">Code.com</a>
                </Logo>
                <Menu>
                    <MenuItem>
                        <a href="/#">Home Page</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/#">About</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/#">Contact</a>
                    </MenuItem>
                </Menu>
            </Container>
        </>
    );
};

export default NavBar;
