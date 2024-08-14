import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <NavBar />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
  );
};

export default Layout;
