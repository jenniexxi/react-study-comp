import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "@pages/BoardList/BoardList";
import BoardDetail from "@pages/BoardDetail/BoardDetail";
import BoardWrite from "@pages/BoardWrite/BoardWrite";
import Layout from "@layouts/Layout";
import LayoutWithoutWrite from "@layouts/LayoutWithoutWrite";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BoardList />}></Route>
          <Route path="/detail/:id" element={<BoardDetail />}></Route>
        </Route>
        <Route element={<LayoutWithoutWrite />}>
          <Route path="/write" element={<BoardWrite />}></Route>
          <Route path="/modify" element={<BoardWrite />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
