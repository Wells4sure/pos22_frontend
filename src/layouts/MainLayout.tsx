import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import FooterComponent from "../components/FooterComponent";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
