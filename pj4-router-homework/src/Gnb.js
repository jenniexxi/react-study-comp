import { Link } from "react-router-dom";

function Gnb() {
    return (
        <div>
            <Link to="/">메인</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/coinlist">CoinList</Link>
        </div>
    )
}

export default Gnb;