import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatWrite from "@pages/BoardList/features/FlaotWrite";
// import FloatWrite from "@pages/BoardList/features/FlaotWrite";

function Layout() {
  // const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <FloatWrite />
      {/* {location.pathname !== '/write' && <FloatWrite />} */}
      {/* === path 중 /write 페이지에서만 FloatWrite 노출 안함 */}
    </>
  );
}

export default Layout;
