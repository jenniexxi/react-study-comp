import { Link } from "react-router-dom";
import styled from "styled-components";
import Coinitem from "./features/Coinitem";
import { useEffect, useState } from "react";
import { getCoinList } from "../../api/coin";


const WrapperBg = styled.div`
    background: lightblue;
    width: 100vw;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 0;
`;

function CoinList() {
    const [coinList, setCoinList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getCoins();
    },[])

    const getCoins = async () =>{
        try {
            const result = await getCoinList();
            setIsLoading(false); // 로딩 끝남
            setCoinList(result);
        } catch {
            console.log('error');
        }
        
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <WrapperBg>
            <Title>CoinList</Title>
            {/* <Link to="/coindetail/94">Detail page</Link> */}
            {coinList.map((item,index) => (
                <Coinitem key={index} item={item}/>
            ))}
            
        </WrapperBg>
    )
}

export default CoinList;