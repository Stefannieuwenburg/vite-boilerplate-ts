
import { Container, Logo, Menu, MenuItem } from "../styles/styles.navbar";
import { FC } from "react";

const NavBar: FC = () => {
    return (
        <>
            <Container>
                <Logo>
                    <a href="/#">Code.com</a>
                </Logo>
                <Menu>
                    <MenuItem>
                        <a href="/#">HomePage</a>
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
