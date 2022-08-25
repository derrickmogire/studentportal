import React from "react";

import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
