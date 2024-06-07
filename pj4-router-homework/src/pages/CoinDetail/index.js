import { useParams } from "react-router-dom";

function CoinDetail() {
    const {coinId} = useParams()
    return (
        <div>
            <h1>CoinDetail{coinId}</h1>
            {/* <p>{`djfhdjhfhj${coinId}`}</p> */}
            <div>
                
            </div>
        </div>
    )
}

export default CoinDetail;