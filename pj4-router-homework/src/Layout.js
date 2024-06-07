import { Outlet } from "react-router-dom";
import Gnb from "./components/gnb";
// import Gnb from "./Gnb";

function Layout() {
    return (
        <>
            <Gnb />
            <Outlet />
        </>
    )
}

export default Layout;