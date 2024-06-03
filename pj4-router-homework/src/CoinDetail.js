import { useParams } from "react-router-dom";

function CoinDetail() {
    const {coinId} = useParams()
    return (
        <div>
            <h1>CoinDetail{coinId}</h1>
        </div>
    )
}

export default CoinDetail;