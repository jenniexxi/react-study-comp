import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import FloatWrite from "@pages/BoardList/features/FlaotWrite";

function LayoutWithoutWrite() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutWithoutWrite;
