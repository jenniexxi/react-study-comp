import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@layouts/Layout";
import BoardList from "@pages/BoardList/BoardList";
import BoardDetail from "@pages/BoardDetail/BoardDetail";
import BoardWrite from "@pages/BoardWrite/BoardWrite";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BoardList />} />
          <Route path="/detail/:id" element={<BoardDetail />} />
          <Route path="/write" element={<BoardWrite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
