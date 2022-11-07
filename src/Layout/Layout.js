import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const Layout = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
