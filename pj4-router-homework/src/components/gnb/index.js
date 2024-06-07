import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    background-color: #333;
    font-size: 20px;
    font-weight: bold;
`;

const HeaderLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:hover {
        color: skyblue;
        text-decoration: underline;
    }
`;

function Gnb() {
    return (
        <Wrapper>
            <HeaderLink to="/">메인</HeaderLink><br/>
            <HeaderLink to="/about">About</HeaderLink><br/>
            <HeaderLink to="/coinlist">CoinList</HeaderLink>
        </Wrapper>
    )
}

export default Gnb;