import React from "react";
import "./Style.css";

const Logo = (props) => {
  return (
    <a href="/" style={{ "text-decoration": "none" }}>
      <div className="logo">
        <span className="logoText logo-Carry">Carry</span>
        <span className="logoText logo-Me">me</span>
      </div>
    </a>
  );
};

export default Logo;
