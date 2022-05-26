import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Layout = () => {
  return (
    <div>
      <SocialMedia />
      <Header />
      <div className="page-full page-width" style={{ minHeight: "700px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
