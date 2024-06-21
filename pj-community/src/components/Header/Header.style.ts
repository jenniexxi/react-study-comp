import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #111;
  height: 64px;
`;

export const Header = styled.header`
  width: 1120px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-right: 30px;
    a {
        display: flex;
    }
  }
`;

export const Container_login = styled(Container)`
  a {
    display: block;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    margin-right: 30px;
    img {
        width: 30px;
        height: 30px;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    li {
        a {
            display: block;
            font-size: 16px;
            color: #fff;
            font-weight: bold;
        }
    }
  }
`;