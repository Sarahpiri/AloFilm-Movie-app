import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
