import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "../pages/BoardList/BoardList";
import BoardDetail from "../pages/BoardDetail/BoardDetail";
import BoardWrite from "../pages/BoardWrite/BoardWrite";
import Layout from "../layouts/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BoardList />}></Route>
          <Route path="/detail/:id" element={<BoardDetail />}></Route>
          <Route path="/write" element={<BoardWrite />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
