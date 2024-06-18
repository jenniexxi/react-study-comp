import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetail } from "../../api/coin";

function CoinDetail() {
    const {coinId} = useParams()
    const [coinInfo, setCoinInfo] = useState();
    useEffect(() => {
        getCoinInfo()
    },[])

    // async 를 바로 쓸 수 없기 때문에 아래와 같이 만들어서 위에서 불러오기
    const getCoinInfo = async () =>{
        try {
            const result = await getCoinDetail(coinId);
            setCoinInfo(result);
        } catch {
            console.log('error');
        }
        
    }

    return (
        <div>
            <h1>CoinDetail : {coinId}</h1>
            <p>{coinInfo?.description}</p>
            <div>
                
            </div>
        </div>
    )
}

export default CoinDetail;