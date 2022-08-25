import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../helpers";
import { BiLogOut } from "react-icons/bi";
const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        {navItems.map((item, i) => (
          <li key={i} className="nav-item">
            {item.icon}
            <Link to={item.link}>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-item logout">
        <BiLogOut size={40} />
        <Link to={"/logout"}>
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
