import styled from "styled-components";

const WrapperBg = styled.div`
    background: lightpink;
    width: 100vw;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 0;
`;

function Home() {
    return (
        <WrapperBg>
            <Title>Home</Title>
        </WrapperBg>
    )
}

export default Home;