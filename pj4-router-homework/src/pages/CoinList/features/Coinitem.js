import { Link } from "react-router-dom";
import styled from "styled-components";
import { TEXT } from "../../../constants/styles";

// id: "btc-bitcoin"
// is_active: true
// is_new: false
// name: "Bitcoin"
// rank: 1
// symbol: "BTC"
// type:"coin"

const Coinitem = ({item}) => {
    return (   
        <SubTitleWrap key={item.id} >
            <SubTitle to={`/coindetail/${item.id}`} color={true ?'blue' :'red'} fontStyle={TEXT.middle}>{item.name}</SubTitle>
        </SubTitleWrap>
    )
    
}

const SubTitleWrap = styled.div`
    margin: 30px auto 0;
    width: 200px;
    height: 50px;
    line-height: 50px;
    border: 1px solid black;
    text-align: center;
    
`;

const SubTitle = styled(Link)`
    font-size: 20px;
    color:${({color})=>color};
    ${({fontStyle})=> fontStyle};
`;
export default Coinitem;