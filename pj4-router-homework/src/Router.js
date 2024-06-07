import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import CoinList from "./CoinList";
// import CoinDetail from "./CoinDetail";
import Home from './pages/Home'
import Layout from "./Layout";
import About from "./pages/About";
import CoinList from "./pages/CoinList";
import CoinDetail from "./pages/CoinDetail";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/coinList" element={<CoinList />}></Route>
                    <Route path="/coinDetail/:coinId" element={<CoinDetail />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;