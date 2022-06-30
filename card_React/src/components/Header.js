import React from "react";
import logo from "../images/logo192.png";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" width={400} />
    </div>
  );
}
