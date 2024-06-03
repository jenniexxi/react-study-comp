import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";

function Layout() {
    return (
        <>
            <Gnb />
            <Outlet />
        </>
    )
}

export default Layout;