import React from "react";
import "./Styles.css";
import Logo from "../SideBar/Logo.jsx";
import Login from "../SideBar/Login.jsx";
import SideBarList from "../SideBar/SideBarList";

const SideBar = () => {
  return (
    <nav className="sideBar">
      <Logo />
      <Login />
      <SideBarList />
    </nav>
  );
};

export default SideBar;
