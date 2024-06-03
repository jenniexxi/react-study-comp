import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Layout from "./Layout";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/page1" element={<Page1 />}></Route>
                    <Route path="/page2" element={<Page2 />}></Route>
                    <Route path="/page2/:id" element={<Page2 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;