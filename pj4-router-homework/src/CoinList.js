import { Link } from "react-router-dom";

const TEMP = [{id:0,title:'a'},{id:1,title:'b'},{id:2,title:'c'},{id:3,title:'d'},{id:4,title:'e'},] 

function CoinList() {

    const Item = ({item}) => {
        return (   
            <div key={item.id}>
                <Link to={`/coindetail/${item.id}`}>{item.title}</Link>
            </div>
        )
        
    }

    return (
        <div>
            <h1>CoinList</h1>
            {/* <Link to="/coindetail/94">Detail page</Link> */}
            {TEMP.map((item,index) => (
                <Item key={index} item={item}/>
            ))}
            
        </div>
    )
}

export default CoinList;