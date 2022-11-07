import React from "react";
import Navbar from "./Navbar";
import Head from "./Head";
const NavbarAndHead = ({ count }) => {
  return (
    <div className="nav-head">
      <Head  />
      <Navbar countCart={count} />
    </div>
  );
};

export default NavbarAndHead;
