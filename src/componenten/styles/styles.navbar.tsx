import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  align-items: center;
  background-color: #ffa60088;
  color: white;
  padding: 1.2rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 1.5rem;
  img {
    width: 10%;
    height: auto;
    object-fit: cover;
  }
  a {
    color: #000000;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  margin-right: 30px;
  font-size: 1rem;
  a {
    color: #000000;
    font-weight: 500;
  }
`;
