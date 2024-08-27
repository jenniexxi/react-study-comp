import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Join from "../pages/Join/Join";
import TodoList from "../pages/TodoList/TodoList";
import Layout from "../layouts/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route element={<Layout />}>
          <Route path="/todo" element={<TodoList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
